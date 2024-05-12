// 2D Array = also known as a multi-dimensional array, is a collection of data elements arranged in a grid-like structure with rows and columns. Each element in the array is referred to as a cell and can be accessed by its row and column indices/indexes.

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];

// console.log(matrix);

// accessing using for loop
// for(let i of matrix){
//     console.log(i);
// }

// classic way
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
//     }
// }

// OR

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i]);
// }

// == SUM OF 2 MATRIXs ==

let matrix1 = [[1,2],[3,4]];
let matrix2 = [[5,6],[7,8]];
let sum = [[],[]];

for(let i=0; i<matrix1.length; i++){
    for(let j=0; j<matrix1[i].length; j++){
        sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

for(let row of sum){
    console.log(row);
}

// similarly can perform subtraction,multiplication,and division also