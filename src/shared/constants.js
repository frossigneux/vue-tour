export const DEFAULT_CALLBACKS = {
  onStart: () => {},
  onPreviousStep: (currentStep) => {},
  onNextStep: (currentStep) => {},
  onStop: () => {}
}

export const DEFAULT_OPTIONS = {
  clickit: false,
  highlight: false,
  labels: {
    buttonSkip: 'Skip tour',
    buttonPrevious: 'Previous',
    buttonNext: 'Next',
    buttonStop: 'Finish'
  },
  startTimeout: 0,
  useKeyboardNavigation: true,
  showStop: true,
  showNext: true,
  showPrev: true,
  showSkip: true
}

export const HIGHLIGHT = {
  CLASSES: {
    ACTIVE: 'v-tour--active',
    TARGET_HIGHLIGHTED: 'v-tour__target--highlighted',
    TARGET_RELATIVE: 'v-tour__target--relative'
  },
  TRANSITION: 'box-shadow 0s ease-in-out 0s'
}

export const DEFAULT_STEP_OPTIONS = {
  enableScrolling: true,
  highlight: DEFAULT_OPTIONS.highlight, // By default use the global tour setting
  modifiers: {
    arrow: {
      element: '.v-step__arrow'
    }
  },
  placement: 'bottom',
  showStop: true,
  showNext: true,
  showPrev: true,
  showSkip: true,
  clickit: false
}

export const KEYS = {
  ARROW_RIGHT: 39,
  ARROW_LEFT: 37,
  ESCAPE: 27
}
