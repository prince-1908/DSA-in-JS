// sub array of given sum

let arr = [1, 4, 20, 3, 10, 5];
let target = 33;

let left = 0;
let right = 0;

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if(sum === target){
        break;
    }
    else if(sum < target){
        right++;
    }
    else if(sum > target){
        sum -= arr[left];
        left++;
    }
}

let subArray = arr.slice(left, right+1);

console.log(subArray);