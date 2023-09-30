function viralAdvertising(n) {
    // Write your code here
    let shared = 5, cont = 0;
    for(let i=0; i<n; i++){
        let liked = Math.floor(shared/2);
        cont += liked;
        shared = liked * 3; 
    }
    return cont;
}

console.log(viralAdvertising(5));