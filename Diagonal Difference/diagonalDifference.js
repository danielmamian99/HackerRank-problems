main();

function diagonalDifference(arr) {
    var izqDer = 0;
    var derIzq = 0;
    for(var i = 0; i < arr.length; i++){
        izqDer += arr[i][i];
        derIzq += arr[i][arr.length-1-i];
    }
    
    solve = Math.abs(izqDer - derIzq);
    return solve;
}

function main() {

    const arr= [[11,2,4],[4,5,6],[10,8,-12]];
    console.log(diagonalDifference(arr));


}