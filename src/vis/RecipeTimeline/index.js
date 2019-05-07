/* eslint-disable no-undef */
import { barHeight, stepHeight } from './style.js';
import FullStep from './FullStep.vue';
// import { loadPatterns } from './loadPatterns';
import './style.css';

export class RecipeTimeline {

  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   * @param {Array<Object>} events - A dict of callback events
   */
  constructor(node, data, events={}) {
    this.selection = d3.select(node);
    this.data = data;
    this.selections = {};
    this.state = {
      visibleSteps: {}
    };

    this.selections.stepList = this.selection.append('ul')
      .attr('class', 'step-list');

    this.fillScale = d3.scaleOrdinal()
      .domain([0, 0.5, 1])
      .range(['passive', 'semi-active', 'active']);
  }

  setTimeScale() {
    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.endTime)])
      .range([0, 100]);
  }

  setStepScale() {
    this.stepScale = d3.scaleBand()
      .domain(this.data.map(d => d.stepName))
      .range([0, this.data.length * stepHeight]); // TODO use id or key
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
    // We need to recompute the layout each time a step is opened or
    // closed. We track the height of open steps in the state, the rerender
    // the steps.
    const setVisibleState = (d, isOpen, height = 0) => {
      if (isOpen) { // close
        delete this.state.visibleSteps[d.stepName];
      } else { // open
        this.state.visibleSteps[d.stepName] = height;
      }
      this.renderSteps();
    };

    this.selections.stepList
      .selectAll('li.step')
      .data(this.data, d => d.stepName)
      .join(
        enter => enter.append('li')
          .attr('class', 'step')
          .call(this.renderStepBars.bind(this))
          .call(this.renderFullStep.bind(this))
          .style('top', (d, i) => this.getStepTopOffset(d,i)),
        update => update.transition()
          .style('top', (d, i) => this.getStepTopOffset(d,i)),
      )
      .on('click', function(d) {
        const isOpen = d3.select(this).classed('open');
        const fullStepHeight = this.childNodes[1].getBoundingClientRect().height;
        setVisibleState(d, isOpen, fullStepHeight);
        d3.select(this).classed('open', !isOpen);
      });
  }

  renderStepBars(selection) {
    selection.append('div')
      .attr('class', d => `step-bar ${this.fillScale(d.type.involvement)}`)
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .style('height', `${barHeight}px`)
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
    const stepHeader = selection.append('span')
      .attr('class', 'step-header')
      .style('transform', d => {
        const x = this.getBarPlacement(d) ? '-100%' : '100%';
        return `translate(${x},0)`;
      })
      .style('right', d => this.getBarPlacement(d) ? 'auto' : '-8px')
      .style('left', d => this.getBarPlacement(d) ? '-8px' : 'auto');

    stepHeader.append('span')
      .attr('class', 'step-title')
      .text(d => d.stepName);

    stepHeader.append('span')
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

  setSteps(data) {
    this.data = data;
    this.setTimeScale();
    this.setStepScale();
    this.renderSteps();
  }
}
