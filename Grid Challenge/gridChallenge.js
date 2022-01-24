'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function createMatriz(grid){
    var arrayIntegers = [];
    grid.forEach(element => {
        var arrayTemp = [];
        for(var i = 0; i < element.length; i++){
            arrayTemp.push(parseInt(element.charCodeAt(i).toString(2),2))
        }
        arrayTemp.sort(function(a, b) {
            return a - b;
          });
        arrayIntegers.push(arrayTemp);
    });
    return arrayIntegers;
}



function gridChallenge(grid) {
    var matriz = createMatriz(grid);
    for(var i=0; i < matriz.length ; i++){
        for(var k=0; k < matriz.length-1 ; k++){
            if(matriz[k][i] > matriz[k+1][i]){
                return "NO";
            }
        }
    }
    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
