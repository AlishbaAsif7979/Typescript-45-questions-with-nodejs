// Creating a function with parameter which return values in string

function city_country(city: string, country: string): string{
    return `${city} , ${country}`;
}

// calling a function and printing the returned value

console.log(city_country("Karachi" , "Pakistan"));


console.log(city_country("Tokyo", "Japan"));



console.log(city_country("Mumbai","India"));