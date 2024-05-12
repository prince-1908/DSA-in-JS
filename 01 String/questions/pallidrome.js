const str = "aba";
let revStr = "";
let lastChar = "";
for(let i=str.length-1; i>=0; i--){
    lastChar = str.substring(i, i+1);
    revStr += lastChar;
}
if(str === revStr){
    console.log(true)
}
else{
    console.log(false)
}