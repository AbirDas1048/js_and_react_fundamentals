// object

let info = {
  firstName: "Abir",
  lastName: "Das",
  dob: "1995-10-31",
  address: "Chittagong",
};

console.log(info);

console.log(info.firstName); // Getting the value of firstName property using dot notation
console.log(info["lastName"]); // Getting the value of lastName property using bracket notation

delete info.address; // Deleting the address property from the info object

console.log(info);

info.address = "Rajshahi"; // Adding a new property address to the info object with the value "Rajshahi"

console.log(info);

info.address = {
    division: "Chittagong Division",
    district: "Chittagong District",
    postcode: "4000",
    policeStation: "Kotwali"
}; // Updating the address property to be an object with multiple properties

console.log(info);

console.log(Object.keys(info)); // Returns an array of the object's own enumerable property names
console.log(Object.values(info)); // Returns an array of the object's own enumerable property values