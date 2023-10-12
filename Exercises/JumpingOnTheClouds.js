function jumpingOnClouds(c) {
    // Write your code here
    let i=0, cont=0;
    while(i != c.length-1){
        if(c[i+2] == 0) i += 2;
        else i++;
        cont++;
    }
    return cont;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));