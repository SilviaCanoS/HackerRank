function equalizeArray(arr) {
    // Write your code here
    let temp = new Array(Math.max(...arr)+1).fill(0);
    for(let i=0; i<arr.length; i++) temp[arr[i]]++;
    temp = Math.max(...temp);
    return arr.length - temp;
}

console.log(equalizeArray([1, 2, 2, 3]));