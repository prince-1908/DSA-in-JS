// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((prev, cur) => {
    return prev + cur;
});
console.log(sum);

let sum2 = arr.reduce((prev, cur) => {
    return prev + cur;
}, 10);

console.log(sum2);

let init = 15;
let sum3 = arr.reduce((prev, cur) => {
    return prev + cur;
}, init);
console.log(sum3);