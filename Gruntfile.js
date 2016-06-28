module.exports = function(grunt) {
	grunt.initConfig({
		jshint: { 
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				autoWatch: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.registerTask('default', ['jshint']);
};