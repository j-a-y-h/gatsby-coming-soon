const critical = require('critical');
console.log("Optimizing critical css rules...");
critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: false,

    // Your base directory
    base: 'public/',

    // HTML source file
    src: 'index.html',

    // Viewport width
    width: 1300,

    // Viewport height
    height: 900,

    // Output results to file
    target: {
        css: './static/css/critical.css',
        html: 'index.html',
        uncritical: './static/css/uncritical.css',
    },

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: true,
});