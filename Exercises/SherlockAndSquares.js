function squares(a, b) {
    // Write your code here
    let raiz = Math.ceil(Math.sqrt(a)), cont = 0;
    while(raiz * raiz <= b){
        raiz++;
        cont++;
    }
    return cont;
}

console.log(squares(17, 24));