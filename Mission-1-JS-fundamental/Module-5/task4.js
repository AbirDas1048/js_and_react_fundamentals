function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    const fare = (distance <= 2 ? 50 : 50 + (distance - 2) * 15) + waitingMinutes * 2;
    return fare * (isNight ? 1.2 : 1);
}

console.log(getCngFare(2)); // 50 - minimum fare
console.log(getCngFare(1)); // 50 - still the minimum, never less
console.log(getCngFare(5)); // 95 - 50 + (3 × 15)
console.log(getCngFare(10)); // 170 - 50 + (8 × 15)
console.log(getCngFare(5, false, 10)); // 115 - 95 + (10 × 2)
console.log(getCngFare(5, true)); // 114 - 95 + 20%
console.log(getCngFare(5, true, 10)); // 138 - 115 + 20%