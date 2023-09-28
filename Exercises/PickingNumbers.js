function pickingNumbers(a) {
    // Write your code here
    let ref = 0, cuenta = [];
    for(let i=0; i<Math.max(...a)+1; i++) cuenta.push(0);
    for(let i=0; i<a.length; i++) cuenta[a[i]]++;
    if(cuenta.filter(item => item != 0).length == 1) return a.length;
    for(let i=0; i<cuenta.length; i++){
        if(cuenta[i] > 0 && cuenta[i+1] > 0){
            if(cuenta[i] + cuenta[i+1] > ref) ref = cuenta[i] + cuenta[i+1];
        }
    } 
    return ref;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));