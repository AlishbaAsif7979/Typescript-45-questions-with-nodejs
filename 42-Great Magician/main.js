// Definethe function to show magician names
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Functions to make magicians names through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array og magician names
var magician_names = ["Rjan", "Rani", "Rafa"];
// Call make_great function to modify magician names
var great_magicians = make_great(magician_names);
//Call show_magicians that show modified list of magicians
show_magician(great_magicians);
