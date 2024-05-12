const str = "😊Prince Singh Chouhan";
console.log(str);

// returns full unicode code
// similar to charCodeAt but also works best with chars outside bmp
console.log(str.codePointAt(0));