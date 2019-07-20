// node file system module
const fs = require('fs'); 

function readFile(filename) { 
    // synchronous call
    return fs.readFileSync(filename); 
}

module.exports.readFile = readFile; 