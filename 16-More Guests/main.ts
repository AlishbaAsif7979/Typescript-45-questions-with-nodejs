//Creating Guest List Array
let guestList = ["Bilquis","Rayyan","Eshaal","Tooba"];

//Making Variable for those guest who cant come
let dontCome = guestList[0];

//Add or Remove Values from Guest List Array
console.log(dontCome,"can't come ");

//Message Print for Bigger Table
guestList.splice(0,1,"Anas");

//Message Print for Bigger Table 
console.log("Good News! We have Found a Bigger Table for Dinner");

//Adding a new guest at starting index of array
guestList.unshift("Shumaila");

//Adding a new Value at ending index of array
guestList.push("Asif");

//Adding a new  guest at middle index of array
let middleIndex: number =Math.floor(guestList.length/2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex,0,"Raza");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending an invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Assalamoalaikum ${oneguest}, would you like to dinner with me`));

