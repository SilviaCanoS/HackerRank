function angryProfessor(k, a) {
    // Write your code here
    a = a.filter(item => item <= 0);
    if(a.length < k) return "YES";
    else return "NO";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
