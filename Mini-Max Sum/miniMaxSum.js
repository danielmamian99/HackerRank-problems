

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
main();

function miniMaxSum(arr) {
    for(i = 0 ; i < 5 ; i++){
        if (i == 0){
            var maximo = arr[0];
            var minimo = maximo;
            var sum = minimo;
        } else{
            if ( arr[i] > maximo){
                maximo = arr[i];
            }
            if(  arr[i] < minimo){
                minimo = arr[i];
            }
            sum += arr[i];
        };

    }
    console.log(`${sum-maximo} ${sum-minimo}`);

}

function main() {
    arr = [1,2,3,4,5];
    miniMaxSum(arr);
}
