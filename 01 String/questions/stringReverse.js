let str = "Prince";
let revStr = "";
let lastChar = "";
for(let i = str.length-1; i>=0; i--){
    lastChar = str.substring(i, i+1);
    revStr += lastChar;
}

console.log(revStr);