//Creating Guest List Array
var guestList = ["Bilquis", "Rayyan", "Eshaal", "Tooba"];
//Making Variable for those guest who cant come
var dontCome = guestList[0];
//Add or Remove Values from Guest List Array
console.log(dontCome, "can't come ");
//Message Print for Bigger Table
guestList.splice(0, 1, "Anas");
//Message Print for Bigger Table 
console.log("Good News! We have Found a Bigger Table for Dinner");
//Adding a new guest at starting index of array
guestList.unshift("Shumaila");
//Adding a new Value at ending index of array
guestList.push("Asif");
//Adding a new  guest at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Raza");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending an invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Assalamoalaikum ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two persons can come
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two name reamains
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// Printing an invitation to the last two guest on the list
console.log("Invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
