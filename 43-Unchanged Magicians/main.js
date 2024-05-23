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
//copying of orignal array through.Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//Show both arrays Orignal and Copied
// Orignal
console.log("Orignal Array\n");
show_magician(magician_names);
//Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);
