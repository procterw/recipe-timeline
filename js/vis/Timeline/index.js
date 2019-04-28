const STEP_HEIGHT = 20;
const MARGINS = { t: 10, r: 10, b: 10, l: 10 };

const calculateHeight = data => (
  data.length * STEP_HEIGHT + MARGINS.t + MARGINS.b
);

export class Timeline {

  /**
   * Represents a book.
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipes
   */
  constructor(selection, data) {
    this.selection = selection;
    this.data = data;

    this.height = calculateHeight(data);
    this.width = selection.node().getBoundingClientRect().width;

    console.log(this.height, this.width);
  }
}
