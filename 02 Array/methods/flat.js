// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let arr = [1,2,[3,4]];
console.log(arr.flat());

let arr2 = [1,2,[3,4,[5,6,[7,8]]]];

console.log(arr2)
console.log(arr2.flat());
console.log(arr2.flat(1));
console.log(arr2.flat(2));
console.log(arr2.flat(3));
console.log(arr2.flat(Infinity)); // if too many then you can infinity 