function maximumPerimeterTriangle(sticks) {
    // Write your code here
    let sum = [], ref = 0;
    for(let i=0; i<sticks.length-2; i++){
        for(let j=i+1; j<sticks.length; j++){
            for(let k=j+1; k<sticks.length; k++){
                let temp = [sticks[i], sticks[j], sticks[k]].sort((a, b) => a - b);
                if(temp[2] < temp[0] + temp[1]){
                    let aux = temp.reduce((a, b) => a + b, 0);
                    if(aux > ref){
                        sum = [...temp];
                        ref = aux;
                    } 
                }
            }
        } 
    }
    if(sum.length == 0) return [-1];
    else return sum;
}

console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));
