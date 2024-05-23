let guestList = ["Alishba","Alishah","Maham","Tooba"];
let dontCome = guestList[0];

console.log ( dontCome, "Because she has to go somewhere");
guestList.splice(0,1,"Anas");
guestList.forEach(guest => console.log (`Assalmoalaikum ${guest}, would you like to dinner with me?`));
