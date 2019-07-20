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
const fileAsync = require('./readFileAsync.js'); 

fileAsync.readFile(input, function(error, contents){ 
    if(error) { 
        console.log('Error: ' + error);
    }
    console.log(contents.toString());
}); 