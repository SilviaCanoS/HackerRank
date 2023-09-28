function sockMerchant(n, ar) {
    // Write your code here
    let colores = [], cont = 0;
    for(let i=0; i<=Math.max(...ar); i++) colores.push(0);
    for(let i=0; i<n; i++) colores[ar[i]]++;
    for(let i=0; i<colores.length; i++) if(colores[i]%2 == 1) cont++;
    return (n-cont) / 2;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));