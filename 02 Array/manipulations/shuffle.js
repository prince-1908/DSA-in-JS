let arr = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

for(let i = arr.length - 1; i >= 0; i--){
    let random = Math.floor(Math.random() * i);

    [arr[i], arr[random]] = [arr[random], arr[i]]
}

console.log(arr);