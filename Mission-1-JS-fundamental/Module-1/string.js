let firstname = "John Doe";
let lastname = "Smith";

let fullname = firstname + " " + lastname;
console.log(fullname); // John Doe Smith

let fullnameTemplate = `${firstname} ${lastname}`;
console.log(fullnameTemplate); // John Doe Smith

let address = "123 Main St";
let city = "Anytown";
let state = "CA";
let zip = "12345";

let fullAddress = `${address}, ${city}, ${state} ${zip}`;
console.log(fullAddress); // 123 Main St, Anytown, CA 12345

let multilineString = `This is a multiline string.
It can span multiple lines.
You can include variables like ${fullname} and ${fullAddress}.`;
console.log(multilineString);

console.log(`The length of the full name is: ${fullname.length}`);
console.log(`The first character of the full name is: ${fullname[0]}`);
console.log(`The last character of the full name is: ${fullname[fullname.length - 1]}`);
console.log(`The full name in uppercase is: ${fullname.toUpperCase()}`);
console.log(`The full name in lowercase is: ${fullname.toLowerCase()}`);
console.log(`The full name with replaced spaces is: ${fullname.replace(/ /g, '_')}`);
console.log(`The full name split into an array is: ${fullname.split(' ')}`);
console.log(`The full name includes 'John': ${fullname.includes('John')}`);
console.log(`The full name starts with 'John': ${fullname.startsWith('John')}`);
console.log(`The full name ends with 'Smith': ${fullname.endsWith('Smith')}`);
console.log(`The full name index of 'Doe' is: ${fullname.indexOf('Doe')}`);
console.log(`The full name last index of 'o' is: ${fullname.lastIndexOf('o')}`);
console.log(`The full name substring from index 5 to 8 is: ${fullname.substring(5, 8)}`);
console.log(`The full name slice from index 5 to 8 is: ${fullname.slice(5, 8)}`);
console.log(`The full name char at index 5 is: ${fullname.charAt(5)}`);
console.log(`The full name char code at index 5 is: ${fullname.charCodeAt(5)}`);
console.log(`The full name trimmed is: ${fullname.trim()}`);
