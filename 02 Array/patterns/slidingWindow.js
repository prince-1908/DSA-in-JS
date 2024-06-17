let arr = [2, 9, 31, -4, 21, 7]
// let arr = [1000, 6, -9, 7, 91, 4];

let windowLength = 3;

// find maximum windowSum
let maxSum;
let windowSum = 0;

for (let i = 0; i < windowLength; i++) {
    windowSum += arr[i];
}

maxSum = windowSum;

for (let i = windowLength; i < arr.length; i++) {
    windowSum = windowSum - arr[i - windowLength] + arr[i];

    if (windowSum > maxSum) {
        maxSum = windowSum;
    }
}

// console.log(maxSum);

// find min sum
let minSum;
let wSum = 0;

for (let i = 0; i < windowLength; i++) {
    wSum += arr[i];
}

minSum = wSum;

for (let i = windowLength; i < arr.length; i++) {
    wSum = wSum - arr[i - windowLength] + arr[i];

    if (wSum < minSum) {
        minSum = wSum;
    }
}

// console.log(minSum);

// max average sum
let avgSum;
let winSum = 0;
let maxAvgSum;

for (let i = 0; i < windowLength; i++) {
    winSum += arr[i];
}

avgSum = winSum / windowLength;
maxAvgSum = avgSum;

for (let i = windowLength; i < arr.length; i++) {
    winSum = winSum - arr[i - windowLength] + arr[i];

    avgSum = winSum / windowLength;

    if (avgSum > maxAvgSum) {
        maxAvgSum = avgSum;
    }
}

// console.log(maxAvgSum);

// min average sum
winSum = 0;
let minAvgSum;

for (let i = 0; i < windowLength; i++) {
    winSum += arr[i];
}

avgSum = winSum / windowLength;
minAvgSum = avgSum;

for (let i = windowLength; i < arr.length; i++) {
    winSum = winSum - arr[i - windowLength] + arr[i];
    avgSum = winSum / windowLength;

    if(avgSum < minAvgSum) {
        minAvgSum = avgSum;
    }
}

console.log(minAvgSum);