function formingMagicSquare(s) {
    // Write your code here
    let total = 100, ref;
    let magic = ["81672943", "43816729", "67294381", "29438167", "83492761", "61834927", "49276183", "27618349 "];
    let arr = [...s[0], s[1][2], ...s[2].reverse(), s[1][0]];
    for(let i=0; i<8; i++){
        ref = 0;
        for(let j=0; j<8; j++){
            if(magic[i][j] != arr[j])ref += Math.abs(arr[j] - magic[i][j]);
        }
        if(ref < total) total = ref;
    }

    if(s[1][1] != 5) total += Math.abs(s[1][1] - 5);
    return total;
}

console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]]));