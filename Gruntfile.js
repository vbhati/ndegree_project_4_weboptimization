module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
          files: {
              'js/perfmatters.min.js': 'js/perfmatters.js',
              'views/js/main.min.js': 'views/js/main.js'
          }
        }
    },
    cssmin: {
      minify: {
        src: 'views/css/bootstrap-grid.css',
        dest: 'views/css/bootstrap-grid.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that minifies css
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['cssmin']);
};