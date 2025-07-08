const { getDirname } = require('../index.js');
const path = require('path');

console.log('Testing CommonJS...');
const dirname = getDirname(__filename);
console.log('__dirname:', dirname);
console.assert(dirname === path.dirname(__filename), 'CommonJS test failed');

console.log('Tests passed!');