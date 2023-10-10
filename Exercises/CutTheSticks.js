function cutTheSticks(arr) {
    // Write your code here
    let cont = [];
    while(arr.length > 0){
        cont.push(arr.length);
        arr = arr.map(item => item - Math.min(...arr)).filter(item => item > 0);
    }
    return cont;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));