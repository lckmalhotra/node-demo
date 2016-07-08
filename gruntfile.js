module.exports = function (grunt) {
    // Load the plugins
    grunt.loadNpmTasks('grunt-wiredep');

    // Configure task(s)
    grunt.initConfig({
        wiredep: {
            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'public/index.html'   // .html support...
                ]
            }
        }
    });

    // Register task(s).
    grunt.registerTask('default', ['wiredep']);
};