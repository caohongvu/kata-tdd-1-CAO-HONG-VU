// Karma configuration
module.exports = function(config) {
  config.set({
    files: [
      'test/**/*.js'
    ],
	// testing framework
    frameworks: ['jasmine']
  });
};