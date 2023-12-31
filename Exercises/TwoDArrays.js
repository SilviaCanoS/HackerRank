function TwoDArrays(arr){
    let cont, ref; 
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            ref = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(i == 0 && j == 0) cont = ref;
            if(ref > cont) cont = ref;
        }
    }
    return cont;
}

console.log(TwoDArrays([[-1, -1, 0, -9, -2, -2], [-2, -1, -6, -8, -2, -5], [-1, -1, -1, -2, -3, -4], 
    [-1, -9, -2, -4, -4, -5], [-7, -3, -3, -2, -9, -9], [-1, -3, -1, -2, -4, -5]]));