'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let readCount = 0;

process.stdin.on('data', function(inputStdin) {
    //console.log(inputStdin);
    if(readCount != 0 ){
        inputString += inputStdin;
        inputString = inputString.split('\n');
        main();
        process.exit();
        readCount = 0;
    }else{
        readCount++;
    }
});


function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const temp = [0,0,0];
    arr.forEach(e => {
       if (e> 0){
            temp[0]++;
       } else if(e < 0) {
            temp[1]++;
       } else{
            temp[2]++;
       }
    });
    for(var i = 0; i < temp.length; i++){
        temp[i] = parseFloat(temp[i]/arr.length).toPrecision(6);
        console.log(temp[i]);
    };
}

function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
    console.log(arr);
}
