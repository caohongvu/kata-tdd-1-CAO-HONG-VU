module.exports = function(grunt) {
	grunt.initConfig({
		karma: {
			options: {
				configFile: 'karma.conf.js'
			},
			unit: {
				singleRun: true
			},
			continuous: {
				background: true
			}
		},
		watch: {
			options: {
				livereload: true
			},
			karma: {
				files: ['src/js/**/*.js', 'test/unit/*.js'],
				tasks: ['karma:continuous:run']
			}
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.registerTask('default', ['watch:karma']);
};