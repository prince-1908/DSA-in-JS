// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

let arr  = [1,2,3,4,5];

// right -> left
let newArr = arr.reduceRight((next, curr) => {
    return next+curr;
});
console.log(newArr)

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]
  