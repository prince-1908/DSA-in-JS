// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

let arr = [1,2,3,4];

arr.copyWithin(1, 3);

console.log(arr);