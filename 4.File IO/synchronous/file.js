function printHelp() { 
    console.log("usage: "); 

    console.log("Type           node readFile.js $your_fileName$"); 
}

var input = process.argv[2]; 

if(input === "--help" || input === undefined) { 
    printHelp(); 
    process.exit(0); 
}

// import module 
const fileSync = require('./readFileSync.js'); 

const contents = fileSync.readFile(input); 
console.log(contents.toString());