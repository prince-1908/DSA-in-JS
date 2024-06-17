let arr = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

// Looping from last to 0th index of the array
for(let i = arr.length - 1; i >= 0; i--){

    // selecting a random index
    let random = Math.floor(Math.random() * i);

    // Swap
    // here, we are swapping using destructuring
    [arr[i], arr[random]] = [arr[random], arr[i]]
}

console.log(arr);