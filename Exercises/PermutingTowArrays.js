function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b).reverse();
    for(let i=0; i<A.length; i++){
        if(A[i] + B[i] < k) return "NO";
    }
    return "YES";
}

console.log(twoArrays(88, [25, 60, 49, 4], [65, 46, 85, 34]))

// 4, 1 3, 3 1 YES
// 5, 2 3 1 1 1, 1 3 4 3 3 NO
// 9, 1 5 1 4 4 2 7 1 2 2, 8 7 1 7 7 4 4 3 6 7 NO
// 9, 3 6 8 5 9 9 4 8 4 7, 5 1 0 1 6 4 1 7 4 3 YES
// 4, 4 4 3 2 1 4 4 3 2 4, 2 3 0 1 1 3 1 0 0 2 YES