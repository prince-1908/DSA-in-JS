// Implement a function to find all pairs of elements in an array that sum up to a specific target value.
console.time();
let arr = [1,2,3,4,5,5,2,6];
let target = 7;
let res = [];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if((arr[i]+arr[j]) === target){
            res.push([arr[i], arr[j]]);
        }
    }
}
console.log(res);
console.timeEnd();