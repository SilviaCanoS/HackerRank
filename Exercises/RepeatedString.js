function repeatedString(s, n) {
    // Write your code here
    let letra = s.split("").filter(item => item == "a").length;
    let resto = n%s.length;
    if(n <= s.length) return s.split("").filter((item, index) => item == "a" && index < resto).length;
    else if(resto == 0) return (n/s.length) * letra;
    else {
        let cont = s.split("").filter((item, index) => item == "a" && index < resto).length;
        return (Math.floor(n/s.length) * letra) + cont;
    }
}

console.log(repeatedString("abcaca", 10));