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

    // loadPatterns(this.svg);
    // Initialize main vis canvas, not html5 canvas
    // this.rescaleCanvas();
    
    this.setTimeScale();
    this.setStepScale();

    // this.renderSteps();
    // this.renderStepHeaders();
    // this.renderStepBars();
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
          .call(this.renderStepHeaders.bind(this))
          .call(this.renderStepBars.bind(this))
          .style('top', d => `${this.stepScale(d.stepName)}px`),
        update => update.transition()
          .style('top', d => `${this.stepScale(d.stepName)}px`)
      );
  }

  renderStepHeaders(selection) {
    const stepHeader = selection.append('span')
      .attr('class', 'step-header')
      .style('margin-left', d => `${this.timeScale(d.startTime)}%`);

    stepHeader.append('span')
      .attr('class', 'step-header')
      .text(d => d.stepName);

    stepHeader.append('span')
      .attr('class', 'step-duration')
      .text(d => `${d.duration} minutes`);
  }

  renderStepBars(selection) {
    selection.append('div')
      .attr('class', 'step-bar')
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .attr('height', barHeight)
      .style('margin-left', d => `${this.timeScale(d.startTime)}%`);
  }

  setSteps(data) {
    this.data = data;
    this.setTimeScale();
    this.setStepScale();
    this.renderSteps();
  }
}
