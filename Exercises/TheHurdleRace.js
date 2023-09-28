function hurdleRace(k, height) {
    // Write your code here
    if(k >= Math.max(...height)) return 0;
    else return Math.max(...height) - k;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));