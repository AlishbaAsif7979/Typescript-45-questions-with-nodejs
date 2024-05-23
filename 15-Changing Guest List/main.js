var guestList = ["Alishba", "Alishah", "Maham", "Tooba"];
var dontCome = guestList[0];
console.log(dontCome, "Because she has to go somewhere");
guestList.splice(0, 1, "Anas");
guestList.forEach(function (guest) { return console.log("Assalmoalaikum ".concat(guest, ", would you like to dinner with me?")); });
