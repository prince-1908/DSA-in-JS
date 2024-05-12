// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let arr = [1,2,3,4,10,20,30,40];

let filtered = arr.filter((x) => x<=10);

console.log(filtered);