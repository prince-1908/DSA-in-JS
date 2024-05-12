let arr = [1, 2, 3, 4, 5];
let rotations = 4;
let k = 0;
rotations %= arr.length;

// right rotations
while (k < rotations) { 
    let n = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = n;

    k++;
}
console.log(arr);

// left rotations
while (k < rotations) {
    let n = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = n;
}
console.log(arr);