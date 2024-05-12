// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let arr = [10,20,30,40];

let found = arr.find(x => x>10);

console.log(found, typeof found);