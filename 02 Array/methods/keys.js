// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

let arr = [1,2,3,4];
let iter = arr.keys();

console.log(iter)

for(const key of iter){
    console.log(key);
}