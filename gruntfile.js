//grunt-file для bootstrapa
module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'js/*.js' // Все JS в папке libs
				],
				dest: 'js/build/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		autoprefixer:{
			dist:{
				files:{
					'css/es_main.css' : 'css/es_main.css'
					}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand:true,
					cwd: 'images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/buld'
				}]
			}
		},
		cssmin: {
				combine: {
						files: {
						  'css/bootstrap-min.css': 'css/bootstrap.css'
						}
				}
			},
		less: {
				development: {
					options: {
						compress: false,
						yuicompress: false,
						optimization: 2,
						sourceMap: true,
						cleancss:false,					
						sourceMapFilename: "main.css.map",
						sourceMapRootpath: ''
					},
					files: {
					  "css/es_main.css": "css/main.less"//,
					  //"css/o_bootstrap.css": ['css/less/bootstrap.less','css/less/variables.less']
					}
				  }				  
				},
		connect: {
				  server: {
					options: {
						livereload: true,
						port: 9000,
						hostname: 'localhost',
						livereload: 35729,
						base: '.'
					}
				  }
				},
		watch:{
			options: {
				livereload:true
			},
			
			scripts: {
				files: ['js/*js'],
				tasks: [],
				options: {
					livereload: true,
					spawn: false,
				
				}			
			},
			index: {
				files: ['*.html'],
				options: {
					livereload:true,
					spawn: false
				}
			},
			css: {
				files: ['css/*.{css,less}'/*, 'css/less/*.less'*/],
				tasks: ['less','autoprefixer'],
				options: {
					spawn:	 false,
				
				}			
			},			
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-autoprefixer');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['connect','watch']);
	grunt.registerTask('img' , ['imagemin']);
	grunt.registerTask('css' , ['cssmin']);
	grunt.registerTask('ls' , ['less']);

};