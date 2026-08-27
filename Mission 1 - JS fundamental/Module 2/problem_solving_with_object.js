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
            duration: "2",
            languages: ["JavaScript", "Python", "Java"]
        },
        {
            company: "Company B",
            position: "Senior Developer",
            duration: "3",
            languages: ["JavaScript", "TypeScript", "React"]
        },
        {
            company: "Company C",
            position: "Team Lead",
            duration: "4",
            languages: ["JavaScript", "Python", "Java"]
        }
    ]
};

let workExperience = 0;
let totalWorkingLanguages = [];

for (const exp of info.experience) {
  workExperience += Number(exp.duration);
  totalWorkingLanguages.push(...exp.languages);
}

const uniqueWorkingLanguages = [...new Set(totalWorkingLanguages)];

console.log(`Total you have ${workExperience} years of work experience in ${uniqueWorkingLanguages.join(', ')} languages.`);

// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
    { name: "Shirt", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 },
];

const spend = (price, quantity) => price * quantity;
let totalAmount = 0;
let totalItem = 0;

for (let item of cart){
    totalItem++;
    totalAmount += spend(item.price, item.quantity);
}

console.log(`You have bought ${totalItem} and you have to pay ${totalAmount}`);