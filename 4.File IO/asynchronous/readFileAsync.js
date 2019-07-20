// node file system module
const fs = require('fs'); 

function readFile(filename, callback) { 
    // synchronous call
    return fs.readFile(filename, callback); 
}

module.exports.readFile = readFile; 