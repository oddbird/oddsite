/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    var SRC_CSS = 'content/static/css/';
    var SRC_JS = 'content/static/js/';
    var DIST = 'content/static/dist/';

    var ALL_JS = DIST + 'all-js.js';
    var PRINT_CSS = SRC_CSS + 'print.css';
    var SCREEN_CSS = SRC_CSS + 'screen.css';

    var MINIFIED_CSS = DIST + 'screen.min.css';
    var MINIFIED_PRINT_CSS = DIST + 'print.min.css';
    var MINIFIED_JS = DIST + 'all-js.min.js';

    var ASSET_MAP = DIST + 'assets.json';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [SRC_JS + '*.js'],
                dest: ALL_JS
            }
        },
        uglify: {
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: MINIFIED_JS
            }
        },
        qunit: {
            files: ['test/tests.html']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: ['Gruntfile.js']
            },
            src: {
                src: [SRC_JS + '*.js', SRC_JS + '/pages/*.js']
            },
            test: {
                src: ['test/*.js']
            }
        },
        compass: {
            dev: {
                options: {
                    bundleExec: true,
                    config: 'config.rb'
                }
            }
        },
        cssmin: {
            screen: {
                src: SCREEN_CSS,
                dest: MINIFIED_CSS
            },
            print: {
                src: PRINT_CSS,
                dest: MINIFIED_PRINT_CSS
            }
        },
        hash: {
            options: {
                mapping: ASSET_MAP
            },
            dist: {
                src: [MINIFIED_JS, MINIFIED_CSS, MINIFIED_PRINT_CSS],
                dest: DIST
            }
        },
        shell: {
            options: {
                stderr: true,
                failOnError: true
            },
            dev_clean: {
                command: 'rm -rf dev-output/* && rm -rf content/static/dist/*',
                stdout: true
            },
            prod_clean: {
                command: 'rm -rf output/* && rm -rf content/static/dist/*',
                stdout: true
            },
            dev_build: {
                command: 'python run.py dev'
            },
            prod_build: {
                command: 'python run.py prod'
            }
        },
        connect: {
            server: {
                options: {
                    base: 'dev-output/'
                }
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            test: {
                files: ['test/**/*'],
                tasks: ['jshint:test', 'qunit']
            },
            js: {
                files: [SRC_JS + '**/*.js'],
                tasks: ['jshint:src', 'dev-quick', 'qunit']
            },
            build: {
                files: ['templates/**/*.html', 'lib/**/*.py', 'modules/**/*.py'],
                tasks: ['dev']
            },
            quick: {
                files: ['content/**/!(*.js)', 'sass/**/*.scss'],
                tasks: ['dev-quick']
            }
        }
    });

    // aliases for shell tasks
    grunt.registerTask('dev-clean', 'shell:dev_clean');
    grunt.registerTask('prod-clean', 'shell:prod_clean');
    grunt.registerTask('dev-build', 'shell:dev_build');
    grunt.registerTask('prod-build', 'shell:prod_build');

    // Prepare assets
    grunt.registerTask('assets', ['compass', 'concat']);

    // Minify assets
    grunt.registerTask('minify', ['uglify', 'cssmin']);

    // Full clean dev build
    grunt.registerTask('dev', ['dev-clean', 'assets', 'dev-build']);
    // Quick dev build; no clean, no JS lint/tests
    grunt.registerTask('dev-quick', ['assets', 'dev-build']);
    // Full clean prod build
    grunt.registerTask('prod', ['prod-clean', 'assets', 'qunit', 'minify', 'hash', 'prod-build']);

    // Run server.
    grunt.registerTask('serve', ['dev', 'connect', 'watch']);

    // Default task
    grunt.registerTask('default', 'dev');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-hash');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
};
