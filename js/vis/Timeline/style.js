export const margins = { t: 10, r: 100, b: 10, l: 20 };

export const timelineStyle = `
  <style>
    .timeline-vis {
      font-family: 'Libre Baskerville', serif;
      box-sizing: border-box;
      width: 100%;
    }

    .timeline-vis .steps {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .timeline-vis .step {
      margin: 0 0 3px 0;
      padding: 0;
    }

    .timeline-vis .step-label {
      font-size: 13px;
      font-style: italic;
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


  </style>
`;
