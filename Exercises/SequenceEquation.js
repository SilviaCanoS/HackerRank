function permutationEquation(p) {
    // Write your code here
    let arr = [...p]
    for(let i=1; i<=p.length; i++){
        let temp = p.indexOf(i) + 1;
        arr[i-1] = p.indexOf(temp) + 1;
    }
    return arr; 
}

console.log(permutationEquation([5, 2, 1, 3, 4]));