function encryption(s) {
    // Write your code here
    s = s.split("").filter(item => item != " ");
    let lim = Math.ceil(Math.sqrt(s.length)), res = "";
    s = s.map((item, index) =>{
        if(index == lim-1 || index%lim == lim-1) return item += " ";
        return item;
    }).join("").split(" ").filter(item => item != "");
    for(let i=0; i<lim; i++){
        for(let j=0; j<s.length; j++) if(s[j][i] != null) res += s[j][i];
        res += " ";
    }
    return res;
}

console.log(encryption("feedthedog"));