Package.describe({
  name: 'ddh:svg-circle-progress',
  summary: 'Simple GUI component to display progress of any kind in form of a SVG based pie chart circle.',
  description: 'Easily display a timer of available seconds or file upload progress with this simple pie chart like SVG progress circle.',
  version: '1.0.0',
  git: 'https://github.com/ddresch/meteor-svg-circle-progress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use(['templating'], 'client');

  api.addFiles([    
    'ddh:svg-circle-progress.html',
    'ddh:svg-circle-progress.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ddh:svg-circle-progress');
  api.addFiles('ddh:svg-circle-progress-tests.js');
});