function getDayType(day){
    
    switch(day.toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday")); // "Weekend"
console.log(getDayType("friday")); // "Weekend"
console.log(getDayType("MONDAY")); // "Working Day"
console.log(getDayType("Bandarban")); // "Invalid Day"
console.log(getDayType("saturday")); // "Weekend"
console.log(getDayType("sunday")); // "Working Day"
console.log(getDayType("tuesday")); // "Working Day"
console.log(getDayType("wednesday")); // "Working Day"
console.log(getDayType("thursday")); // "Working Day"
console.log(getDayType("fridAy")); // "Weekend"
console.log(getDayType("saturDay")); // "Weekend"
console.log(getDayType("sUnday")); // "Working Day"