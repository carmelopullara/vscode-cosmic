const { writeFileSync } = require('fs');
const palette = require('./palette');
const colors = require('./colors');
const tokenColors = require('./tokenColors');

const content = {
  name: 'Cosmic',
  author: 'Carmelo Pullara',
  colors: colors(palette),
  tokenColors: tokenColors(palette),
};

writeFileSync('./themes/Cosmic.json', JSON.stringify(content, null, 2));
