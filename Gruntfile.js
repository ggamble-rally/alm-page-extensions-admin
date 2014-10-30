(function() {
  module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.registerTask('default', ['jshint']);
    return grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        options: {
          node: true,
          esnext: true,
          curly: true,
          indent: 2
        },
        all: {
          src: ['src/**/*.js']
        }
      }
    });
  };

}).call(this);
