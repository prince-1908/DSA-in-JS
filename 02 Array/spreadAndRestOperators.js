let arr = [1,2,3,4];

let arr2 = [arr,5,6,7];
console.log(arr2);

// spread operator
let arr3 = [...arr, 5,6,7];
console.log(arr3);


// rest operator
let myFunc = (...myArr) => {
    console.log(myArr);
};

myFunc([1,2],[3,4],[5,6],[7,8]);