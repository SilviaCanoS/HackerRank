function designerPdfViewer(h, word) {
    // Write your code here
    let arr = word.split("").filter((item, index) => word.indexOf(item) == index);
    for(let i=0; i<arr.length; i++){
        switch(arr[i]){
            case "a": arr[i] = 0; break;
            case "b": arr[i] = 1; break;
            case "c": arr[i] = 2; break;
            case "d": arr[i] = 3; break;
            case "e": arr[i] = 4; break;
            case "f": arr[i] = 5; break;
            case "g": arr[i] = 6; break;
            case "h": arr[i] = 7; break;
            case "i": arr[i] = 8; break;
            case "j": arr[i] = 9; break;
            case "k": arr[i] = 10; break;
            case "l": arr[i] = 11; break;
            case "m": arr[i] = 12; break;
            case "n": arr[i] = 13; break;
            case "o": arr[i] = 14; break;
            case "p": arr[i] = 15; break;
            case "q": arr[i] = 16; break;
            case "r": arr[i] = 17; break;
            case "s": arr[i] = 18; break;
            case "t": arr[i] = 19; break;
            case "u": arr[i] = 20; break;
            case "v": arr[i] = 21; break;
            case "w": arr[i] = 22; break;
            case "x": arr[i] = 23; break;
            case "y": arr[i] = 24; break;
            case "z": arr[i] = 25; break;    
        }
        arr[i] = h[arr[i]];
    }
    return Math.max(...arr) * word.length;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"));