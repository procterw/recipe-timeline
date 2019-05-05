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
    this.components = {};

    this.stepList = this.selection.append('ul')
      .attr('class', 'step-list');
    // loadPatterns(this.svg);
    // Initialize main vis canvas, not html5 canvas
    // this.rescaleCanvas();
    
    this.setTimeScale();
    this.setStepScale();

    this.renderSteps();
    this.renderStepHeaders();
    this.renderStepBars();

    console.log(data);
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
    this.components.steps = this.stepList.selectAll('li')
      .data(this.data)
      .join('li')
      .attr('class', 'step')
      .style('top', d => `${this.stepScale(d.stepName)}px`);
  }

  renderStepHeaders() {
    const stepHeader = this.components.steps.append('span')
      .attr('class', 'step-header');

    stepHeader.append('span')
      .attr('class', 'step-header')
      .text(d => d.stepName);

    stepHeader.append('span')
      .attr('class', 'step-duration')
      .text(d => `${d.duration} minutes`);
  }

  renderStepBars() {
    this.components.steps.append('div')
      .attr('class', 'step-bar')
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .attr('height', barHeight);
  }

  resortSteps(data) {
    this.data = data;
    this.setStepScale();

    this.components.steps
      .data(this.data, d => d.stepName)
      // .order()
      .transition()
      .style('top', d => `${this.stepScale(d.stepName)}px`);
  }

    

    // this.components.stepLabels = this.components.steps
    //   .append('text')
    //   .attr('class', 'step-name-label')
    //   .text(d => d.stepName);

    // this.components.timeLabels = this.components.steps
    //   .append('text')
    //   .attr('class', 'step-time-label')
    //   .attr('transform', (d, i) => {
    //     // HACK to place labels side by side
    //     const x = this.components.stepLabels
    //       .filter((d, i0) => i === i0)
    //       .node()
    //       .getBoundingClientRect().width;
    //     return `translate(${x + 5},0)`;
    //   })
    //   .text(d => `${d.duration} minutes`);

    // this.components.stepBars = this.components.steps
    //   .append('rect')
    //   .attr('height', barHeight)
    //   .attr('width', d => this.timeScale(d.duration))
    //   .attr('x', 0)
    //   .attr('y', 5);
  
}
