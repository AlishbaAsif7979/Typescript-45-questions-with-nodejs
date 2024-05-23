// Define a function to print each magician name from an array

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Define an array containing magicians name 
let magician_names = ["Jadu alish ka","Raseela Raja","Raat ki Rani"]

//Call the function to print each magician name
show_magician(magician_names);