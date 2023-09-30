function beautifulDays(i, j, k) {
    // Write your code here
    let cont = 0;
    for(let x=i; x<=j; x++){
        let num = parseInt(x.toString().split("").reverse().join(""));
        if((x - num)%k == 0) cont++;
    }
    return cont;
}

console.log(beautifulDays(20, 23, 6));