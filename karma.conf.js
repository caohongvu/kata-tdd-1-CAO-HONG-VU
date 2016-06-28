// Karma configuration
module.exports = function(config) {
  config.set({
    files: [
      'src/**/*.js','test/**/*.js'
    ],
	// testing framework
    frameworks: ['jasmine'],
	browsers : ['Chrome'],
    preprocessors: {
      'src/js/controllers/*.js': ['jshint', 'coverage'],
	  'src/js/services/*.js': ['jshint', 'coverage'],
      'src/js/app.js': ['jshint', 'coverage']
    },
	// list of karma plugins
    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
	  'karma-jshint-preprocessor',
      'karma-coverage',
	  'karma-ie-launcher'
    ],
	coverageReporter: {
		//input file type
		type : 'text',
		//folder to containt test coverage results
		dir: 'test-results/coverage/',
		file: 'coverage-result.txt' 
    },
    junitReporter: {
		outputFile: 'test-results/junit-results.xml'
    }
  });
};