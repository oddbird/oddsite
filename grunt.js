/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    var SRC_CSS = 'content/static/css/';
    var SRC_JS = 'content/static/js/';
    var BUILD_CSS = 'content/static/dist/css/';
    var BUILD_JS = 'content/static/dist/js/';

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
                dest: BUILD_JS + 'all-js.js'
            }
        },
        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: BUILD_JS + 'all-js.min.js'
            }
        },
        mincss: {
            dist: {
                src: SRC_CSS + 'screen.css',
                dest: BUILD_CSS + 'screen.min.css'
            }
        },
        watch: {
            files: ['<config:lint.files>', 'sass/**/*.scss'],
            tasks: 'lint concat min compass mincss'
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
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint concat min compass mincss');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-compass');
};
