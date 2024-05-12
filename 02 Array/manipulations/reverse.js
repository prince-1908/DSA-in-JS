let arr = [1,2,3,5,6,4,4];
let left = 0;
let right = arr.length-1;

while(left < right){
    let temp = arr[left]; 
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr);

