let info = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(info?.address?.city); // Anytown
console.log(info?.address?.zipCode); // undefined
console.log(info?.contact?.email); // undefined

console.log(info?.address?.zipCode ?? "Zip code not available"); // This is used of nullish coalescing operator to provide a default value if the property is undefined or null