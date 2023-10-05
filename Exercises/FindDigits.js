function findDigits(n) {
    // Write your code here
    let arr = n.toString().split("")
    arr = arr.filter(item => n%parseInt(item) == 0);
    return arr.length;
}

console.log(findDigits(10));