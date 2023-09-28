function migratoryBirds(arr) {
    // Write your code here
    let min = Math.min(...arr);
    let birds = new Array(Math.max(...arr)-min+1);
    birds.fill(0);
    for(let i=min; i<=Math.max(...arr); i++) birds.push(0);
    for(let i of arr) birds[i - min]++;
    return birds.indexOf(Math.max(...birds)) + min;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))