export const margins = { t: 10, r: 100, b: 10, l: 20 };

export const stepHeight = 40;
export const barHeight = 18;

export const timelineStyle = `
  <style>
    .timeline-vis {
      font-family: 'Libre Baskerville', serif;
      font-size: 13px;
      box-sizing: border-box;
      width: 100%;
    }

    .timeline-vis .steps {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .timeline-vis .step {
      margin: 0 0 2px 0;
      padding: 0;
      cursor: pointer;
    }

    .timeline-vis .step-label {
      font-style: italic;
    }

    .timeline-vis .step.expanded {
      background: #e8f3fe;
      1px solid #c8d6e5;
    }

    .timeline-vis .step:hover {
      background: #dbe9f8;
    }

    .timeline-vis .step-duration {
      margin-top: 2px;
      height: 10px;
      border: 2px solid black;
    }

    .timeline-vis .step-duration.passive {
      background: white;
    }

    .timeline-vis .step-duration.semi-active {
      background: repeating-linear-gradient(
        -45deg,
        white,
        white 3px,
        black 3px,
        black 4px
      );
    }

    .timeline-vis .step-duration.active {
      background: repeating-linear-gradient(
        -45deg,
        black,
        black 3px,
        white 3px,
        white 4px
      );
    }

    .timeline-vis .step .full-step {
      max-height: 0;
      overflow: hidden;
      padding: 0;
      transition: max-height 3s padding 3s;
    }

    .timeline-vis .step.expanded .full-step {
      max-height: 500px;
      padding: 4px 0;
    }

    .timeline-vis .step-ingredients {
      padding-left: 24px;
    }

    .timeline-vis .step-ingredient {

    }

    .timeline-vis .step-instructions {
      margin: 2px 0 4px;
    }

  </style>
`;
