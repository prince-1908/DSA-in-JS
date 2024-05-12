// Write a function to find the maximum element in an array.
console.time();
let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    if(i == arr.length-1){
        console.log(arr[i]);
    }
}
console.timeEnd();