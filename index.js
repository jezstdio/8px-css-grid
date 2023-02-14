const fs = require('fs');

function getSCSS() {
   return fs.readFileSync(`${__dirname}/scss/8px-css-grid.scss`);
}

module.exports = { getSCSS };