const str = "https://example.com/q2lk3j"
const str2 = "2kj3hg"
const str3 = "ab\2kj3hg"
const str4 = "ab\uD800c"
// Returns true if this string does not contain any lone surrogates, false otherwise.

console.log(str.isWellFormed())
console.log(str2.isWellFormed())
console.log(str3.isWellFormed())
console.log(str4.isWellFormed())