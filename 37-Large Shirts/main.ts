//Making a Function

function make_shirt(size: string = " Large", printMessage: string =  "I  love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a Function with by default values
make_shirt();

// Calling a function with medium size by default
make_shirt("Medium")

// Printing a  Different Message 
function make_shirt2(size: string = " Small", printMessage: string =  "I love Youtube"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
make_shirt2("Large")
