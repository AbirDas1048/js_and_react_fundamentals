let info = {
    firstName: "Abir",
    lastName: "Das",
    dob: "1995-10-31",
    address: {
        division: "Chittagong Division",
        district: "Chittagong District",
        postcode: "4000",
        policeStation: "Kotwali"
    },
    experience: [
        {
            company: "Company A",
            position: "Software Engineer",
            duration: "2 years",
            languages: ["JavaScript", "Python", "Java"]
        },
        {
            company: "Company B",
            position: "Senior Developer",
            duration: "3 years",
            languages: ["JavaScript", "TypeScript", "React"]
        },
        {
            company: "Company C",
            position: "Team Lead",
            duration: "4 years",
            languages: ["JavaScript", "Python", "Java"]
        }
    ]
};

console.log(info["address"]["postcode"]); // Accessing the postcode property of the address object using bracket notation
console.log(info.experience[0].company); // Accessing the company property of the first experience object using dot notation

let entry = Object.entries(info); // Converting the info object into an array of key-value pairs
console.log(entry); // Logging the array of key-value pairs

console.log(entry[0][1]);

info.experience[1].languages.push("PHP");
console.log(info.experience[1]);