function birthday(s, d, m) {
    // Write your code here
    let cont = 0;
    if(s.length == 1 && m == 1 && s[0] == d) return 1;
    for(let i=0; i<s.length-1; i++){
        let sum = s.slice(i, i+m).reduce((a, b) => a + b, 0);
        if(sum == d) cont++;
    }
    return cont;
}

console.log(birthday([4], 4, 1));