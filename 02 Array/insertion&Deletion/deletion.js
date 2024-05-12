// using prebuilt methods
let arr = [];
const val = 69;
const index = 2;

// first index
arr = [1,2,3,4];
arr.shift();
console.log("removed from first index: ", arr);

// last index
arr = [1,2,3,4];
arr.pop();
console.log("removed from last index: ", arr);

// middle index;
arr = [1,2,3,4];
arr.splice(index, 1);
console.log("removed from middle index: ", arr);

// MANNUALLY REMOVE

// first index;
arr = [1,2,3,4];
for(let i=0; i<arr.length; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = 0;
console.log("removed from first index: ",arr)

// last index;
arr = [1,2,3,4];
arr.length--;
console.log("removed from last index" ,arr);

// middle index;
arr = [1,2,3,4];
for(let i=index; i<arr.length; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = 0
console.log("removed from mid index: ", arr);