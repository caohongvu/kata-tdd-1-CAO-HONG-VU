module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'src/app.js', 'src/controllers/*.js', 'src/services/*.js', 'test/**/*.js'],
		},
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
			all: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint', 'karma:unit']
			}
		}
		
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default', ['watch']);
};