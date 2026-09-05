// Arithmatic operators +, -, *, /, %, ++, --, ()
// Assignment operators =, +=, -=, *=, /=, %=
// Comparison operators ==, ===, !=, !==, >, <, >=, <=
// Logical operators &&, ||, !
// Bitwise operators &, |, ^, ~, <<, >>, >>>
// Ternary operator ? :
// Type operators typeof, instanceof
// Operator precedence and associativity
// Operator precedence determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated before operators with lower precedence. For example, multiplication (*) has a higher precedence than addition (+), so in the expression 2 + 3 * 4, the multiplication is performed first, resulting in 2 + 12 = 14.
// Associativity determines the order in which operators of the same precedence are evaluated. Most operators have left-to-right associativity, meaning they are evaluated from left to right. For example, in the expression 2 - 3 + 4, the subtraction is performed first, resulting in -1 + 4 = 3. However, some operators, such as the assignment operator (=), have right-to-left associativity, meaning they are evaluated from right to left. For example, in the expression a = b = c, the assignment is performed from right to left, so c is assigned to b first, and then b is assigned to a.
// datetime operators Date.now(), new Date(), getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds()
// nullish coalescing operator ??, optional chaining operator ?., nullish assignment operator ??=
// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is often used to provide default values for variables that may be null or undefined. For example, in the expression const result = value ?? defaultValue;, if value is null or undefined, result will be assigned the value of defaultValue; otherwise, result will be assigned the value of value.
// !empty, !null, !undefined, !NaN, !0, !false
// object operators Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.seal(), Object.is(), Object.hasOwnProperty(), Object.prototype.toString()

let a;
console.log(a, typeof a); // undefined

let b = null;
console.log(b, typeof b); // null

let c = NaN;
console.log(c, typeof c); // NaN

let d = 0;
console.log(d, typeof d); // 0

let e = false;
console.log(e, typeof e); // false

let f = '';
console.log(f, typeof f); // ''

let g = {};
console.log(g, typeof g); // {}

let h = [];
console.log(h, typeof h); // []

let i = function() {};
console.log(i, typeof i); // function

let j = Symbol('symbol');
console.log(j, typeof j); // symbol

let k = 42n;
console.log(k, typeof k); // bigint

let m = new Date();
console.log(m, typeof m); // object

let n = /regex/;
console.log(n, typeof n); // object

let o = new Map();
console.log(o, typeof o); // object

let p = new Set();
console.log(p, typeof p); // object

let q = new WeakMap();
console.log(q, typeof q); // object

let r = new WeakSet();
console.log(r, typeof r); // object

let s = new ArrayBuffer(8);
console.log(s, typeof s); // object

let t = new DataView(s);
console.log(t, typeof t); // object

let u = new Int8Array(8);
console.log(u, typeof u); // object

let v = new Uint8Array(8);
console.log(v, typeof v); // object

let w = new Uint8ClampedArray(8);
console.log(w, typeof w); // object

let x = new Int16Array(8);
console.log(x, typeof x); // object

let y = new Uint16Array(8);
console.log(y, typeof y); // object

let z = new Int32Array(8);
console.log(z, typeof z); // object

let aa = new Uint32Array(8);
console.log(aa, typeof aa); // object

let ab = new Float32Array(8);
console.log(ab, typeof ab); // object

let ac = new Float64Array(8);
console.log(ac, typeof ac); // object

let ad = new BigInt64Array(8);
console.log(ad, typeof ad); // object

let ae = new BigUint64Array(8);
console.log(ae, typeof ae); // object

let af = new Promise((resolve, reject) => {});
console.log(af, typeof af); // object

let ah = new RegExp('regex');
console.log(ah, typeof ah); // object

let ai = new Proxy({}, {});
console.log(ai, typeof ai); // object

let aj = new WeakRef({});
console.log(aj, typeof aj); // object