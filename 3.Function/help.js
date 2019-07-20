function printHelp() { 
    console.log("usage: "); 

    console.log("Type           node help.js $your_input$"); 
}

var input = process.argv[2]; 

if(input === "--help" || input === undefined) { 
    printHelp(); 
    process.exit(0); 
}

console.log("Hello " + input); 