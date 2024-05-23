// Definethe function to show magician names

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Functions to make magicians names through .map() it will modify array
function make_great(magicians:string[]){
   return magicians.map(name =>`The Great ${name}`);
}

//Define an array og magician names
let magician_names = ["Rjan","Rani","Rafa"];


// Call make_great function to modify magician names
let great_magicians =  make_great(magician_names);


//Call show_magicians that show modified list of magicians
show_magician(great_magicians);

