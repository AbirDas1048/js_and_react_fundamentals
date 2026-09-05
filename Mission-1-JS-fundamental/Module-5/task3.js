function validateUsername(username) {
    let name = username.toLowerCase();

    return name.length < 4
        ? "Too Short"
        : name.includes(" ")
            ? "No Space Allowed"
            : name.includes("admin")
                ? "Reserved Word"
                : "Available";
}

console.log(validateUsername("rahim123")); // "Available"
console.log(validateUsername("ab")); // "Too Short"
console.log(validateUsername("a b")); // "Too Short"
console.log(validateUsername("abcd")); // "Available"
console.log(validateUsername("rahim islam")); // "No Space Allowed"
console.log(validateUsername("superadmin99")); // "Reserved Word"
console.log(validateUsername("Admin_Rahim")); // "Reserved Word"