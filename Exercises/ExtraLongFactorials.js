function extraLongFactorials(n) {
    // Write your code here
    let num = BigInt(1);
    for(let i = BigInt(n); i>0; i--){
        num *= i;
    }
    console.log(num.toString());
}

extraLongFactorials(30);