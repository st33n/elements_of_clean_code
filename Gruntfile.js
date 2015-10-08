module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      deploy: {
        command: "git push"
      },
      asciidoc: {
        command: "asciidoc -b slidy -o index.html presentation.txt"
      }
    },
    watch: {
      asciidoc: {
        files: [ '*.txt' ],
        tasks: ['shell:asciidoc']
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('deploy', ['shell:deploy']);
  grunt.registerTask('default', ['shell:asciidoc', 'watch']);

};

