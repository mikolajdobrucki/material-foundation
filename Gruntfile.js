module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'css/material-foundation.css': 'scss/material-foundation.scss',
          'css/demo.css': 'scss/demo.scss'
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'js/material-foundation.js': [
            'bower_components/what-input/what-input.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation-sites/dist/foundation.js',
            'js/src/ripple.js',
            'js/src/switches.js',
            'js/src/material-foundation.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['uglify'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','uglify']);
};
