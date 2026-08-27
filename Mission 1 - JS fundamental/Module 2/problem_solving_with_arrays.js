let numbers = [5, 10, 7, 6, 48, 16, 99, 25, 20, 3, 9, 485, 74];

const determineMaxNumber = arrayOfNumbers => {
    if (!Array.isArray(arrayOfNumbers) && arrayOfNumbers.length === 0)
        return 0;

    if (arrayOfNumbers.length <= 1)
        return arrayOfNumbers[0];

    let max = arrayOfNumbers[0];

    for (let i = 1; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] >= max){
            max = arrayOfNumbers[i];
        }
    }

    return max;
}

console.log(`The max number in the array: ${numbers} is ${determineMaxNumber(numbers)}`);
