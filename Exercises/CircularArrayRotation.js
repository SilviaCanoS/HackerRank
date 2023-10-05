function circularArrayRotation(a, k, queries) {
    // Write your code here
    for(let i=0; i<k; i++){
        let temp = a.pop();
        a.unshift(temp);
    }
    for(let i=0; i<queries.length; i++) queries[i] = a[queries[i]];
    return queries;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))