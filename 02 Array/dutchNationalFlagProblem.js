let arr = [2, 0, 2, 1, 1, 0, 1, 0, 1, 0];

let start = 0;
let middle = 0;
let end = arr.length - 1;

while (middle <= end) {
    if (arr[middle] === 2) {
        [arr[middle], arr[end]] = [arr[end], arr[middle]]
        end--;
    }
    else if(arr[middle] === 1){
        middle++;
    }
    else if(arr[middle] === 0){
        [arr[middle], arr[start]] = [arr[start], arr[middle]]
        start++;
        middle++;
    }
}

console.log(arr);