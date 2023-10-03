function BinaryNumbers(n){
    let cont = 0, ref = 0;
    n = n.toString(2);
    for(let i=0; i<n.length; i++){
        if(n[i] == "1") ref++;
        else{
            if(ref > cont) cont = ref;
            ref = 0;
        }
    }
    if(ref > cont) cont = ref;
    return cont;
}

console.log(BinaryNumbers(439));