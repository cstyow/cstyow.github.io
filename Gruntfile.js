'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        dev: './dev',
        prod: './static'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            sass: {
                files: ['<%= yeoman.dev %>/sass/{,*/}*.scss'],
                tasks: ['sass:prod']
            },
            js: {
                files: '<%= jshint.dev.files.src %>',
                tasks: ['jshint:dev']
            }
        },
        clean: {
            prod: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.prod %>/*',
                        '!<%= yeoman.prod %>/.git*'
                    ]
                }]
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                src: ['<%= yeoman.dev %>/sass/style.scss'],
                dest: '<%= yeoman.prod %>/css/style.css'

            },
            prod: {
                options: {
                    style: 'compressed'
                },
                src: ['<%= yeoman.dev %>/sass/style.scss'],

                    dest: '<%= yeoman.prod %>/css/style.css'

            }
        },
        modernizr: {
            'devFile': '<%= yeoman.dev %>/bower_components/modernizr/modernizr.js',
            'extensibility' : {
                'prefixed' : true
            },
            'outputFile': '<%= yeoman.dev %>/js/vendor/modernizr.js',
            'parseFiles' : false,
            'uglify' : false,
            'tests' : []
        },
        jshint: {
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                noempty: true,
                trailing: true,
                undef: true,
                unused: true,
                quotmark: 'single',
                jquery: true,
                devel: true,
                browser: true,
                force: true,

                // add global vars here
                globals: {
                    require: true,
                    define: true,
                    Modernizr: true
                }
            },
            dev: {
                files: {
                    src: [
                        '<%= yeoman.dev %>/js/{,*/}*.js',
                        '!<%= yeoman.dev %>/js/vendor/*'
                    ]
                }
            },
            prod: {
                options: {
                    devel: false
                },
                files: '<%= jshint.dev.files %>'
            }
        },
        uglify: {

            // move and compress modernizr
            '<%= yeoman.prod %>/js/vendor/modernizr.js': '<%= yeoman.dev %>/js/vendor/modernizr.js'

        },
        imagemin: {
            options: {
                progressive: true,
                optimizationLevel: 3
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dev %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.prod %>/img'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            prod: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.dev %>',
                    dest: '<%= yeoman.prod %>',
                    src: [
                        'img/{,*/}*.{webp,gif,svg}',
                        'fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            prod: [
                'imagemin'
            ]
        }
    });

    grunt.registerTask('build', [
        'jshint:prod',
        'modernizr',
        'clean:prod',
        'concurrent:prod',
        'sass:prod',
        'uglify',
        'copy'
    ]);

    grunt.registerTask('default', [
        'jshint:dev',
        'sass:dev'
    ]);

    // used by Yeoman for project setup
    grunt.registerTask('init', [
        'modernizr',
        'sass:dev'
    ]);
};