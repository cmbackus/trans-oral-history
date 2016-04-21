module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , assemble: {
            options: {
                layout: "src/layouts/default.hbs"
                , partials: ['src/pages/partials/**/*.md']
                , flatten: true
            }
            , pages: {
                options: {
                    partials: ['src/pages/partials/**/*.hbs']
                    , data: ['src/data/*.json']
                }
                , files: {
                    'web/': ['src/pages/*.hbs']
                }
            }
        }
        , clean: {
            all: ['web/*.html']
        }
        , sass: {
            dist: {
                options: {
                    style: 'compressed'
                }
                , files: {
                    './web/css/base.css': './src/styles/base.scss'
                , }
            }
        }
        , watch: {
            css: {
                files: ['src/styles/**/*.scss']
                , tasks: ['sass:dist']
            }
            , assemble: {
                files: ['src/pages/*.hbs']
                , tasks: ['assemble']
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble');
    grunt.registerTask('default', ['clean', 'assemble', 'sass:dist']);
    grunt.registerTask('watch', ['clean', 'assemble', 'sass:dist', 'watch']);



};