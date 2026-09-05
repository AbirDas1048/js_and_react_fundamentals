// array
let country = ["Bangladesh", "India", "Pakistan", "Nepal", "Thailand"];

console.log(country, country.length, country[3]);

country.push("Singapore"); // Will be added at the end of the array
console.log(country, country.length);

country.push("Malaysia"); // Will be added at the end of the array
console.log(country, country.length);

country.pop(); // Will be removed from the end of the array
console.log(country, country.length);

country.unshift("Afghanistan"); // Will be added at the beginning of the array
console.log(country, country.length);

country.shift(); // Will be removed from the beginning of the array
console.log(country, country.length);

country.splice(3, 0, "Sri Lanka"); // Adds "Sri Lanka" at index 3 without removing any element
console.log(country, country.length);

country.splice(2, 1, "Bhutan", "Myanmar"); // Removes 1 element at index 2 and adds "Bhutan" and "Myanmar"
console.log(country, country.length);

country.splice(4, 2); // Removes 2 elements starting from index 4
console.log(country, country.length);

let slicedCountry1 = country.slice(1, 4); // Returns a shallow copy of a portion of the array from index 1 to 3 (4 is not included)
console.log(slicedCountry1, slicedCountry1.length, country.length);

let slicedCountry2 = country.slice(2); // Returns a shallow copy of the array from index 2 to the end
console.log(slicedCountry2, slicedCountry2.length, country.length);

let slicedCountry3 = country.slice(-4, -2); // Returns a shallow copy of the array from the 4th last element to the 2nd last element (not including the 2nd last)
console.log(slicedCountry3, slicedCountry3.length, country.length);