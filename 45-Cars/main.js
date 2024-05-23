// Define a function to create a car object with optional options..
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car project
var my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof:True");
// Print the variable to ensure all the information is stored in correctly in the object
console.log(my_car);
