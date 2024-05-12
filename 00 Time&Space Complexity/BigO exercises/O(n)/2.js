// Create a function to count the number of occurrences of a specific element in an array.
console.time();
let arr2 = [1,1,3,4,6,5,2,1,1];
let target = 1;
let counter = 0;
for(let i=0; i<arr2.length; i++){
    if(arr2[i] == target){
        counter++;
    }
}
console.log(counter);
console.timeEnd();