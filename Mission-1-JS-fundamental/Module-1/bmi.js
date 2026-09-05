// input from terminal

const weight = process.argv[2];
const height = process.argv[3];

if (weight <= 0 || height <= 0) {
    console.error("Please enter valid positive values for weight and height.");
    process.exit(1);
}

function convertFeetToMeters(heightFtIn) {
    // Extract the whole number part (feet)
    let feet = Math.floor(heightFtIn);
    
    // Extract the decimal part, multiply by 10, and round to get exact inches
    // Example: 5.4 -> 0.4 * 10 = 4.0 inches
    let inches = Math.round((heightFtIn - feet) * 10);
    
    // Calculate total inches and convert to meters (1 inch = 0.0254 meters)
    let totalInches = (feet * 12) + inches;
    let meters = totalInches * 0.0254;
    
    return meters;
}

function calculateBmi() {
    let heightMeters = convertFeetToMeters(height);
    const bmi = weight / (heightMeters * heightMeters);
    return bmi;
}

let bmi = calculateBmi();

console.log(`Your Body Mass Index (BMI) is: ${bmi.toFixed(2)}`);


// Determine and print the health category
if (bmi < 18.5) {
    console.log("Health Category: Underweight");
} else if (bmi >= 18.5 && bmi < 25.0) {
    console.log("Health Category: Normal weight (Healthy)");
} else if (bmi >= 25.0 && bmi < 30.0) {
    console.log("Health Category: Overweight");
} else {
    console.log("Health Category: Obese");
}