var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an array of Countries and Print its Orignal Order
var countriesToVisit = ["China", "Pakistan", "India", "Brazil"];
console.log("Original Order:, countriesToVisit");
// Print the Array in Alphabetic order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the array is still in its Original Order
console.log("Still in Original Order:", countriesToVisit);
//Print  the array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Orignal order
console.log("Still in Original Order:", countriesToVisit);
// We have Changed the Orignal Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
//Print the array to show that it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the array to show that its order has been changed in Alphabetic order now
console.log("Sorted in Alphabetic Order:", countriesToVisit.sort());
// We have Changed the Orignal Array Order Now again
console.log("Original Array Reversed:", countriesToVisit.reverse());
