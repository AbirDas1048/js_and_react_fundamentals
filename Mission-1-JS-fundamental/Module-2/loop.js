let countries = ["Bangladesh", "India", "Pakistan", "Nepal", "Thailand", "Singapore", "Malaysia", "Afghanistan"];

for (let country of countries){
    console.log(`Visited: ${country}`);
}

let experiences = {
    company: "Company A",
    position: "Software Engineer",
    duration: "2 years",
    languages: ["JavaScript", "Python", "Java"]
};

for (let experience in experiences){
    console.log(`${experience} -> ${experiences[experience]}`);
}

for (let experience in experiences){
    if (experience != 'languages')
        continue;
    for (let language of experiences[experience]){
        console.log(`${language}`);
    }
}