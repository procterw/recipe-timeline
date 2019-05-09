/* eslint-disable no-undef */
import FullStep from './FullStep.vue';
// import { loadPatterns } from './loadPatterns';
import './style.css';

const BAR_MARGIN_BOTTOM = 2;
export const BAR_HEIGHT = 35;
export const STEP_HEIGHT = BAR_HEIGHT + BAR_MARGIN_BOTTOM;

export class RecipeTimeline {
  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   * @param {Array<Object>} events - A dict of callback events
   */
  constructor(node, data) {
    this.selection = d3.select(node);
    this.data = data;
    this.selections = {};
    this.state = {
      visibleSteps: {}
    };

    this.fillScale = d3.scaleOrdinal()
      .domain([0, 0.5, 1])
      .range(['passive', 'semi-active', 'active']);

    this.renderLegend();
    this.selections.timeAxis = this.selection.append('ul')
      .attr('class', 'time-axis');
    this.selections.stepList = this.selection.append('ul')
      .attr('class', 'step-list');
  }

  setTimeScale() {
    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.endTime)])
      .range([0, 100]);
  }

  setStepScale() {
    this.stepScale = d3.scaleBand()
      .domain(this.data.map(d => d.stepName))
      .range([0, this.data.length * STEP_HEIGHT]); // TODO use id or key
  }

  // Gets the "top" property for each step. Because we have to use absolute
  // layout to use transitions, we have to manually add the height of lal
  // open parent steps and add it to the stepScale
  getStepTopOffset(d, i) {
    const parentSteps = this.data.map(d => d.stepName).slice(0, i);
    const cumOffset = parentSteps.map(step => {
      return this.state.visibleSteps[step] || 0;
    }).reduce((cumOffset, offset) => cumOffset + offset, 0);
    return `${this.stepScale(d.stepName) + cumOffset}px`;
  }

  renderSteps() {
    const self = this;

    this.selections.stepList
      .selectAll('li.step')
      .data(this.data, d => d.stepName)
      .join(
        enter => enter.append('li')
          .attr('class', 'step')
          .style('top', (d, i) => this.getStepTopOffset(d,i))
          .call(this.renderStepBars.bind(this))
          .call(this.renderFullStep.bind(this)),
        update => update.transition()
          .style('top', (d, i) => this.getStepTopOffset(d,i))
      )
      .call(this.renderStepBars.bind(this))
      .on('click', function(d) {
        const isOpen = d3.select(this).classed('open');
        d3.select(this).classed('open', !isOpen);
        // We need to recompute the layout each time a step is opened or
        // closed. We track the height of open steps in the state, the rerender
        // the steps.
        const { height } = this.childNodes[1].getBoundingClientRect();
        self.state.visibleSteps[d.stepName] = isOpen ? 0 : height;
        self.renderSteps();
      });
  }

  renderStepBars(selection) {
    selection
      .selectAll('div.step-bar')
      .data(d => [d]) // WHY
      .join(
        enter => enter.append('div')
          .attr('class', d => `step-bar ${this.fillScale(d.type.involvement)}`)
          .style('height', `${BAR_HEIGHT}px`)
      )
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .style('margin-left', d => `${this.timeScale(d.startTime)}%`)
      .call(this.renderStepHeaders.bind(this));
  }

  // returns 0 for "place left", 1 for "place right"
  getBarPlacement(d) {
    const startOffset = this.timeScale(d.startTime);
    const endOffset = 100 - this.timeScale(d.endTime);
    return startOffset < endOffset ? 0 : 1;
  }

  renderStepHeaders(selection) {
    selection
      .selectAll('span.step-header')
      .data(d => [d])
      .join(
        enter => enter.append('span')
          .attr('class', 'step-header')
          .call(this.addTitleLabel)
          .call(this.addDurationLabel)
      )
      .style('right', d => this.getBarPlacement(d) ? 'auto' : '-8px')
      .style('left', d => this.getBarPlacement(d) ? '-8px' : 'auto')
      .style('transform', d => {
        const x = this.getBarPlacement(d) ? '-100%' : '100%';
        return `translate(${x},0)`;
      });
  }

  // Given a step selection, adds a span with the step title
  addTitleLabel(selection) {
    selection.append('span')
      .attr('class', 'step-title')
      .text(d => d.stepName);
  }

  // Given a step selection, adds a duration span in minutes
  // TODO make time options more flexible
  addDurationLabel(selection) {
    selection.append('span')
      .attr('class', 'step-duration')
      .text(d => `${d.duration} minutes`);
  }

  renderFullStep(selection) {
    selection.each(function(d) {
      new Vue({
        el: d3.select(this).append('div').node(),
        render: h => h(FullStep, { props: { ...d } }),
      });
    }); 
  }

  // Renders an axis with 5 minute intervals
  // TODO make more flexible, or use D3 axes
  renderTimeAxis() {
    // this.selections.timeAxis
    const endTime = this.timeScale.domain()[1];
    const nBlocks = Math.floor(endTime / 5);
    const timeBlocks = [...Array(nBlocks)].map(() => 5);
    const remainder = endTime % 5;
    if (remainder > 0) timeBlocks.push(remainder);

    const getCumuTime = (d, i) => {
      let time = 0;
      for (let j = 0; j < i; j++) {
        time += timeBlocks[j];
      }

      // TODO less hacky, move somewhere else
      if (time < 10) return `00:0${time}`;
      return `00:${time}`;
    };

    this.selections.timeAxis
      .selectAll('li')
      .data(timeBlocks)
      .join('li')
      .attr('class', 'time-block')
      .style('width', d => {
        const percentage = `${100 * d / endTime}%`;
        // leave space for margins between blocks
        return `calc(${percentage} - 4px)`;
      })
      .text(getCumuTime);
  }

  renderLegend() {
    const labels = {
      '0': 'Passive',
      '0.5': 'Semi-active',
      '1': 'Active'
    };

    const legend = this.selection.append('ul')
      .attr('class', 'timeline-legend')
      .selectAll('li')
      .data(this.fillScale.domain())
      .join('li');

    legend.append('div')
      .attr('class', d => `step-bar ${this.fillScale(d)}`)
      .style('height', '27px') // TODO why
      .style('width', '40px');

    legend.append('span')
      .attr('class', 'label')
      .text(d => labels[d]);
  }

  setSteps(data) {
    this.data = data;
    this.setTimeScale();
    this.renderTimeAxis();
    this.setStepScale();
    this.renderSteps();
  }
}
