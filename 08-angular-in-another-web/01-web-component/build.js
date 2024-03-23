const concat = require('concat');

(async function build() {
    const files = [
        './dist/01-web-component/runtime.js',
        './dist/01-web-component/polyfills.js',
        './dist/01-web-component/main.js',
    ];

    await concat(files, 'dist/01-web-component.js')
})()
