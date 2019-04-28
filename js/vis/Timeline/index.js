/* eslint-disable no-undef */
import { timelineStyle } from './style.js';

export class Timeline {

  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   */
  constructor(selection, data) {
    this.selection = selection
      .append('section')
      .attr('class', 'timeline-vis')
      .html(timelineStyle);

    this.data = data;
    this.width = selection.node().getBoundingClientRect().width;

    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.endTime)])
      .range([0, this.width]);

    this.enter();
    // this.enterGrouped();
  }

  enter() {
    this.steps = this.selection
      .append('ul')
      .attr('class', 'steps')
      .selectAll('li')
      .data(this.data)
      .enter()
      .append('li')
      .attr('class', 'step')
      .style('padding-left', d => `${this.timeScale(d.startTime)}px`);

    this.steps.append('span')
      .attr('class', 'step-label')
      .text(d => d.instructions);

    this.steps.append('div')
      .attr('class', d => d.type.id)
      .classed('step-duration', true)
      .style('width', d => `${this.timeScale(d.elapsedTime)}px`);
  }
}
