function jumpingOnClouds(c, k) {
    let energy = 100, x = k;
    if(c.length != k){
        while(x != 0){
            console.log(x)
            console.log(energy)
            energy--;
            if(c[x] == 1) energy -= 2;
            x += k;
            if(x >= c.length) x = x - c.length
        }
    } 
    energy--;
    if(c[0] == 1) energy -= 2;
    return energy;
}

console.log(jumpingOnClouds([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], 19));