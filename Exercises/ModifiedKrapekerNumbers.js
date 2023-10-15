function kaprekarNumbers(p, q) {
    // Write your code here
    let res = [];
    for(let x=p; x<=q; x++){
        let temp = (x * x).toString().split("");
        if((x*x).toString().length < 2 * (x).toString().length) temp.unshift(0);
        let right = temp.slice(0, x.toString().length).join("");
        let left = temp.slice(x.toString().length ).join("");
        if(parseInt(right) + parseInt(left) == x) res.push(x); 
    }
    if(res.length == 0) return "INVALID RANGE";
    return res.join(" ");
}

console.log(kaprekarNumbers(1, 100));