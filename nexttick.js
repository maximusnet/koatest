const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('./template/base.pug', {
    name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"
