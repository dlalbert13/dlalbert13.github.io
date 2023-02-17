var s4xdmConfig = {
  providerBaseURL: 'https://www.praesidiumacademy.com/scorm/',
  scormVersion: '2004',
  shareCookiesWithProvider: true,
  useObjectives: true,
  useInteractions: true,
  useCommentsFromLearner: true,
  useCommentsFromLMS: true,
  width: 0,
  height: 0,
  playMode: 'passthrough',
  courseDir: '/courses/',
  // The custom identifier of the SCO if not using in passthrough mode.
  scoIdentifier: '',
  // The resource href of the SCO if using in passthrough mode.
  resourceHref: '',
  // Some LMSes treat initializing and not setting anything (if S4XDM fails to load, or just doesn't set anything)
  // as a completion.  Use this to always initialize the status to incomplete if it's not otherwise initialized.
  forceStatusIncompleteOnInit: false,
  providerConfig: {}
};
