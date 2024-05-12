// The forEach() method of Array instances executes a provided function once for each array element.

let arr = [1,2,3,4,5];

// parameters = element, index, array
arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

arr.forEach((elem, index) => {
    console.log(elem, index)
});

arr.forEach((elem) => {
    console.log(elem)
});

console.log("============================================================");

arr.forEach((elem) => {
    elem += elem;
    console.log(elem)
});