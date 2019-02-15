'use strict';

const fs = require('fs');

fs.watch('watchme.txt', () => console.log('File changed!'));
console.log('Now watching watchme.txt for changes..');
