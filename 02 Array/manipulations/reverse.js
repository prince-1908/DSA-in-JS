let arr = [1, 2, 3, 4, 5];
let left = 0;
let right = arr.length - 1;

while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr);


// using another array
let reversed = [];;
for (let i = arr.length - 1; i >= 0; i--) {
    // reversed[reversed.length] = arr[i];
    // or
    reversed.push(arr[i]);
}

console.log(reversed);