/* eslint-disable no-undef */
import { margins, barHeight, stepHeight } from './style.js';
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

  renderSteps() {
    this.selections.stepList
      .selectAll('li.step')
      .data(this.data, d => d.stepName)
      .join(
        enter => enter.append('li')
          .attr('class', 'step')
          .call(this.renderStepBars.bind(this))
          .style('top', d => `${this.stepScale(d.stepName)}px`),
        update => update.transition()
          .style('top', d => `${this.stepScale(d.stepName)}px`)
      );
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

  setSteps(data) {
    this.data = data;
    this.setTimeScale();
    this.setStepScale();
    this.renderSteps();
  }
}
