function appendAndDelete(s, t, k) {
    // Write your code here
    if(JSON.stringify(s) === JSON.stringify(t)) return "Yes";
    let index;
    for(index=0; index<t.length; index++){
        if(s[index] != t[index]) break;
    }
    let calc = (s.length - index) + (t.length - index);
    if(calc == k) return "Yes";
    else if(calc < k && (k - calc)%2 == 0) return "Yes";
    else if(s.length + t.length < k) return "Yes"
    
    return "No"
}

console.log(appendAndDelete(["a", "b", "c", "d", "e", "f"], ["f", "e", "d", "c", "b", "a"], 15));