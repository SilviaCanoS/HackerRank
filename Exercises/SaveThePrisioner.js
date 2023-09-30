function saveThePrisoner(n, m, s) {
    // Write your code here
    if ((m+s-1)%n == 0) return n
    return (m+s-1)%n;
}

console.log(saveThePrisoner(5, 10, 2));
