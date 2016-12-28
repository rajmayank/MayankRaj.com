module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/js/*.js',
				dest: 'dist/js/script.min.js'
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/css/style.min.css': ['src/css/*.css']
				}
			}
		},
		htmlmin: { // Task 
			dist: { // Target 
				options: { // Target options 
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files 
					'dist/index.html': 'src/index.html'
				}
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**/*.{png,jpg,svg}'],
					dest: 'dist/images/'
				}],
				files: [{
					expand: true,
					cwd: 'src/icons/',
					src: ['**/*.{ttf,eot,svg,woff}'],
					dest: 'dist/icons/'
				}],
			},
		},
		watch: {
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['uglify'],
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['cssmin']
			},
			html: {
				files: ['src/*.html'],
				tasks: ['htmlmin']
			},
			images: {
				files: ['src/images/**'],
				tasks: ['copy']
			},
			options: {
				livereload: true
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-contrib-watch');



	// grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy']);
	// grunt.registerTask('copy', ['uglify', 'cssmin', 'htmlmin', 'copy']);
	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy' , 'watch']);

};