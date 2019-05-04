/* eslint-disable no-undef */
import { margins, barHeight } from './style.js';

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

    this.svg = this.selection.append('svg');
    this.canvas; // main vis
    this.rescaleCanvas();
    
    this.setTimeScale();
    this.setStepScale();

    this.renderSteps();

    console.log(data);

    // this.data = data;

    // this.timeScale = d3.scaleLinear()
    //   .domain([0, d3.max(data, d => d.endTime)])
    //   .range([0, this.width - margins.r - margins.l]);

    // this.selection = selection
    //   .append('section')
    //   .attr('class', 'timeline-vis')
    //   .html(timelineStyle);

    // this.fillScale = d3.scaleOrdinal()
    //   .domain([0, 0.5, 1])
    //   .range(['passive', 'semi-active', 'active']);

  }

  rescaleCanvas() {
    this._width = this.selection.node().getBoundingClientRect().width;
    this.width = this._width - margins.r - margins.l;

    // TODO
    this._height = 1000;
    this.height = this._width - margins.t - margins.b;

    this.svg
      .attr('width', this._width)
      .attr('height', this._height);

    this.canvas = this.svg.append('g')
      .attr('transform', `translate(${margins.r},${margins.t})`);
  }

  setTimeScale() {
    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.endTime)])
      .range([0, this.width]);
  }

  setStepScale() {
    this.stepScale = d3.scaleBand()
      .domain(this.data.map(d => d.stepName))
      .range([0, this.height]); // TODO use id or key
  }

  renderSteps() {
    this.components.steps = this.canvas.selectAll('g')
      .data(this.data)
      .enter()
      .append('g')
      .attr('transform', d => {
        const x = this.timeScale(d.startTime);
        const y = this.stepScale(d.stepName);
        return `translate(${x},${y + 5})`;
      });

    this.components.stepLabels = this.components.steps
      .append('text')
      .text(d => d.stepName);

    this.components.stepBars = this.components.steps
      .append('rect')
      .attr('height', barHeight)
      .attr('width', d => this.timeScale(d.duration))
      .attr('x', 0)
      .attr('y', 10);
  }

  // renderRecipes() {
  //   const nestedData = d3.nest()
  //     .key(d => d.recipeName)
  //     .entries(this.data);
    
  //   const recipeSection = this.selection.selectAll('section')
  //     .data(nestedData)
  //     .enter()
  //     .append('section');

  //   recipeSection
  //     .html(d => `<h2>${d.key}</h2>`);

  //   recipeSection
  //     .call(this.renderSteps.bind(this));
  // }

  // renderSteps(recipes) {
  //   recipes.call(this.renderTimeAxis.bind(this));

  //   this.stepWrapper = recipes
  //     .append('ul')
  //     .style('padding-left', `${margins.l}px`)
  //     .attr('class', 'steps');

  //   const steps = this.stepWrapper
  //     .selectAll('li')
  //     .data(d => d.values)
  //     .enter()
  //     .append('li')
  //     .attr('class', 'step')
  //     .style('padding-left', d => `${this.timeScale(d.startTime)}px`)
  //     .on('click', function() {
  //       d3.select(this).classed('expanded', !d3.select(this).classed('expanded'));
  //     });

  //   // duration bars
  //   steps.append('div')
  //     .attr('class', d => this.fillScale(d.type.involvement))
  //     .classed('step-duration', true)
  //     .style('width', d => `${this.timeScale(d.elapsedTime)}px`);

  //   // step labels
  //   steps.append('span')
  //     .attr('class', 'step-label')
  //     .text(d => d.stepName);

  //   const fullStep = steps.append('div')
  //     .attr('class', 'full-step');
    
  //   fullStep.append('p')
  //     .attr('class', 'step-instructions')
  //     .text(d => d.instructions);

  //   fullStep.append('ul')
  //     .attr('class', 'step-ingredients')
  //     .selectAll('li')
  //     .data(d => d.ingredients)
  //     .enter()
  //     .append('li')
  //     .attr('class', 'step-ingredient')
  //     .text(d => `${d.measurement} ${d.name}`);
  // }

  // renderTimeAxis(selection) {
  //   selection
  //     .append('svg')
  //     .attr('height', 22)
  //     .attr('width', this.width)
  //     .append('g')
  //     .attr('class', 'axis')
  //     .attr('transform', `translate(${margins.l},20)`)
  //     .call(
  //       d3.axisTop(this.timeScale)
  //     );
  // }
}
