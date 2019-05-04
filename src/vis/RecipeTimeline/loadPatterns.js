// https://bl.ocks.org/jfsiii/7772281
export const loadPatterns = svg => {
  const defs = svg.append('defs');

  defs.append('pattern')
    .attr('id', 'pattern-stripe')
    .attr('width', 4)
    .attr('height', 4)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('patternTransform', 'rotate(45)')

    .append('rect')
    .attr('width', 2)
    .attr('height', 4)
    .attr('transform', 'translate(0,0)')
    .attr('fill', 'white');

  defs.append('mask')
    .attr('id', 'mask-stripe')

    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'url(#pattern-stripe)');
};
