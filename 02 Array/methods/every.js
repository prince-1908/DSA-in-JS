// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr = [1,2,3,4,6,7,5,3,2,4];

console.log(arr.every((a) => a<40));
console.log(arr.every((a) => a<5));

const lessThan10 = (x) => {
    return x <10;
}

console.log(arr.every(lessThan10));