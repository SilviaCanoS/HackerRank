function processData(input) {
    //Enter your code here
    input = input.split("\n");
    let obj = {};
    for(let i=1; i<=input[0]; i++){
        let temp = input[i].split(" ");
        obj[temp[0]] = temp[1];
    }

    for(let i=1+parseInt(input[0]); i<input.length; i++){
        if(obj.hasOwnProperty(input[i])) console.log(input[i] + "=" + obj[input[i]])
        else console.log("Not found");
    }
} 

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry");