// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr = [1,2,3,4];

let arr2 = arr.map((x) => {
    console.log(x*4);
    return x*4;
});

console.log(arr2)