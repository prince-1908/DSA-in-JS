// using prebuiltFuntion
const val = 69;

// first index;
let arr = [1,2,3,4];
arr.unshift(val);
console.log("first index pre: ",arr);

// last index;
arr = [1,2,3,4];
arr.push(val);
console.log("last index pre: ", arr);

// middle index;
arr = [1,2,3,4];
let index = 2;
arr.splice(index, 0, val);
console.log("mid index pre: ",arr);


// MANNUALLY
arr = [1,2,3,4];

// first index;
for(let i=arr.length;i>0;i--){
    arr[i] = arr[i-1];
}
arr[0] = val;
console.log("first index mannually: ",arr);

// last index;
arr = [1,2,3,4];
arr[arr.length] = val;
console.log("last index mannually:",arr);

// middle index;
arr = [1,2,3,4];
index = 2;
for(let i = arr.length; i>index; i--){
    arr[i] = arr[i-1];
}
arr[index] = val;
console.log("middle index mannually: ",arr);