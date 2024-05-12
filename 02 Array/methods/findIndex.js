// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

let arr = [1,2,3,4,5];

let index = arr.findIndex(x => x>2);
console.log(index, typeof index);

index = arr.findIndex(x => x>10);
console.log(index, typeof index);
