// Karma configuration
module.exports = function(config) {
  config.set({
    files: [
      'test/**/*.js'
    ],
	// testing framework
    frameworks: ['jasmine'],
	browsers : ['Chrome'],
	// list of karma plugins
    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
	  'karma-ie-launcher'
    ]
  });
};