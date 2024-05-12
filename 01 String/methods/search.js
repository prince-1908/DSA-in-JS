// The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// search inp and return its index
console.log("prince".search('i'))

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"
