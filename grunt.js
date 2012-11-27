/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    var SRC_CSS = 'content/static/css/';
    var SRC_JS = 'content/static/js/';
    var BUILD_CSS = 'content/static/css-dist/';
    var BUILD_JS = 'content/static/js-dist/';

    // Project configuration.
    grunt.initConfig({
        lint: {
            files: ['grunt.js', SRC_JS + '**/*.js', 'test/*.js']
        },
        qunit: {
            files: 'test/tests.html'
        },
        concat: {
            dist: {
                src: SRC_JS + '**/*.js',
                dest: BUILD_JS + 'all-js.js'
            }
        },
        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: BUILD_JS + 'all-js.min.js'
            }
        },
        cssmin: {
            dist: {
                src: SRC_CSS + 'screen.css',
                dest: BUILD_CSS + 'screen.min.css'
            }
        },
        watch: {
            files: ['content/**/*', 'templates/**/*.html', 'sass/**/*.scss', 'test/**/*'],
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
    grunt.registerTask('default', 'lint concat min qunit compass cssmin exec');

    // Run server.
    grunt.registerTask('serve', 'default server watch');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-exec');
};
