/* eslint-disable no-undef */
import { timelineStyle, margins } from './style.js';

export class Timeline {

  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   */
  constructor(selection, data) {
    this.data = data;
    this.width = selection.node().getBoundingClientRect().width;

    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.endTime)])
      .range([0, this.width - margins.r - margins.l]);

    this.timeAxis = selection
      .append('svg')
      .attr('height', 22)
      .attr('width', this.width)
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${margins.l},20)`)
      .call(
        d3.axisTop(this.timeScale)
      );

    this.selection = selection
      .append('section')
      .attr('class', 'timeline-vis')
      .html(timelineStyle);

    this.fillScale = d3.scaleOrdinal()
      .domain([0, 0.5, 1])
      .range(['passive', 'semi-active', 'active']);

    this.enter();
  }

  enter() {
    this.stepWrapper = this.selection
      .append('ul')
      .style('padding-left', `${margins.l}px`)
      .attr('class', 'steps');

    const steps = this.stepWrapper
      .selectAll('li')
      .data(this.data)
      .enter()
      .append('li')
      .attr('class', 'step')
      .style('padding-left', d => `${this.timeScale(d.startTime)}px`)
      .on('click', function() {
        d3.select(this).classed('expanded', !d3.select(this).classed('expanded'));
      });

    // duration bars
    steps.append('div')
      .attr('class', d => this.fillScale(d.type.involvement))
      .classed('step-duration', true)
      .style('width', d => `${this.timeScale(d.elapsedTime)}px`);

    // step labels
    steps.append('span')
      .attr('class', 'step-label')
      .text(d => d.stepName);

    const fullStep = steps.append('div')
      .attr('class', 'full-step');
    
    fullStep.append('p')
      .attr('class', 'step-instructions')
      .text(d => d.instructions);

    fullStep.append('ul')
      .attr('class', 'step-ingredients')
      .selectAll('li')
      .data(d => d.ingredients)
      .enter()
      .append('li')
      .attr('class', 'step-ingredient')
      .text(d => `${d.measurement} ${d.name}`);
  }
}
