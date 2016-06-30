// Karma configuration
module.exports = function(config) {
  config.set({
    files: [
	  'src/lib/angular.min.js',
	  'src/lib/angular-mocks.js',
      'src/**/*.js','test/unit/*.js'
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