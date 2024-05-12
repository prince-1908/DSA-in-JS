// Write a function to sort an array using bubble sort or selection sort.
console.time();
let arr = [1,3,1,4,2,2,4,2,2,7,8,4,7,3,6,3];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
console.timeEnd();