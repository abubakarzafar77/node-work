var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');


var writeMe = fs.writeFileSync('writeMe.txt', readMe)

console.log(readMe);