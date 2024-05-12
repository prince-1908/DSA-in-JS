// A String of the specified targetLength with the padString applied at the end of the current str.

const str = "Prince";

console.log(str.padEnd(10, '.'))
console.log(str.padEnd(10, '_'))
console.log(str.padEnd(10, '>'))

// if nothing given it prints spaces
console.log(str.padEnd(10))
// "Prince    "