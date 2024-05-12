const s = "hello"
let sum = 0;
let diff;
for(let i=0; i<s.length; i++){
    let a,b;
    a = s.charCodeAt(i);
    b = s.charCodeAt(i+1) && s.charCodeAt!==NaN ? s.charCodeAt(i+1) : s.charCodeAt(i);
    diff = a > b ? a - b : b - a;
    sum = sum + diff;
}
console.log(sum);