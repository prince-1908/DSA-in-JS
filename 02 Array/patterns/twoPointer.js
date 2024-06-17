// reverse
let arr = [1, 2, 3, 4, 5];
let left = 0;
let right = arr.length - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
}

// console.log(arr);

// 2sum of sorted array
arr = [1, 13, 39, 41, 57, 69];
let target = 80;
left = 0;
right = arr.length - 1;
let indexes = [];

while (left < right) {
    if (arr[left] + arr[right] === target) {
        indexes = [left, right];
        break;
    }
    else if (arr[left] + arr[right] > target) {
        right--;
    }
    else if (arr[left] + arr[right] < target) {
        left++;
    }
}
// console.log(indexes);

// remove duplicate elements
arr = [1, 1, 2, 2, 3, 3, 4];

let i = 0;
for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
    }
}
i++;

// console.log("No. of unique elements: ", i);

let uniqueArray = arr.slice(0, i);
// console.log("Unique Array: ", uniqueArray);