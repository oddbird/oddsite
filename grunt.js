/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    var SRC_CSS = 'output/static/css/';
    var SRC_JS = 'js/';
    var DIST = 'output/static/dist/';

    var MINIFIED_CSS = DIST + 'screen.min.css';
    var MINIFIED_JS = DIST + 'all-js.min.js';

    // Project configuration.
    grunt.initConfig({
        lint: {
            files: ['grunt.js', SRC_JS + '**/*.js', 'test/**/*.js']
        },
        qunit: {
            files: 'test/**/*.html'
        },
        concat: {
            dist: {
                src: SRC_JS + '**/*.js',
                dest: DIST + 'all-js.js'
            }
        },
        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: MINIFIED_JS
            }
        },
        cssmin: {
            dist: {
                src: SRC_CSS + 'screen.css',
                dest: MINIFIED_CSS
            }
        },
        hash: {
            src: [MINIFIED_JS, MINIFIED_CSS],
            dest: DIST
        },
        watch: {
            files: ['content/**/*', 'templates/**/*.html', 'sass/**/*.scss'],
            tasks: 'default'
        },
        server: {
            base: 'output/'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {}
        },
        uglify: {},
        compass: {
            dev: {
                bundleExec: true,
                config: 'config.rb'
            }
        },
        exec: {
            clean: {
                command: 'find content -name *~ -delete && rm -rf output/*',
                stdout: true
            },
            build: {
                command: 'python run.py build content/'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint exec compass concat min cssmin hash');

    // Run server.
    grunt.registerTask('serve', 'default server watch');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-hash');
};
