//Destructuring
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


// old
const OldName = info.firstName;

// new => nested and aliasing
const { dob, lastName: surName, address: {division, district}, experience: [firstExperience, , { company: thirdCompanyName, languages: [, thirdCompanySecondLanguages], position: thirdCompanyPosition }] } = info;


console.log(surName, division, dob, firstExperience, thirdCompanyName, thirdCompanySecondLanguages, thirdCompanyPosition);
