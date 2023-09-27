function flippingMatrix(matrix) {
    // Write your code here
    let n = matrix.length / 2, sum = 0;

    let cuadro1 = [];
    for(let i=0; i<n; i++){ 
        for(let j=0; j<n; j++) cuadro1.push(matrix[i][j]) 
    }

    let cuadro2 = [];
    for(let i=matrix.length-1; i>=n; i--){ 
        for(let j=matrix.length-1; j>=n; j--) cuadro2.push(matrix[i][j]) 
    }

    let cuadro3 = [];
    for(let i=0; i<n; i++){
        for(let j=matrix.length-1; j>=n; j--) cuadro3.push(matrix[i][j])
    }

    let cuadro4 = [];
    for(let i=matrix.length-1; i>=n; i--){ 
        for(let j=0; j<n; j++) cuadro4.push(matrix[i][j]) 
    }
    
    for(let i=0; i<n*n; i++) sum += Math.max(cuadro1[i], cuadro2[i], cuadro3[i], cuadro4[i])
    return sum;
}

console.log(flippingMatrix([[11, 21, 31, 32, 22, 12], [41, 51, 61, 62, 52, 42], [71, 81, 91, 92, 82, 72], 
    [73, 83, 93, 94, 84, 74], [43, 53, 63, 64, 54, 44], [13, 23, 33, 34, 24, 14]]));
//[[107, 54, 128, 15], [12, 75, 110, 138], [100, 96, 34, 85], [75, 15, 28, 112]]
//[[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]