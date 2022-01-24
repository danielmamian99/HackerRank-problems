main();

function countingSort(arr) {
    arr = [...arr].sort((a, b) => a-b);
    n = arr.length;
    middle = ((n+1)/2)-1;
    [arr[middle],arr[n-1]] = [arr[n-1],arr[middle]];
    var st = middle;
    var ed = n-1;
    while(st <= ed){
        [arr[st],arr[ed]] = [arr[ed],arr[st]];
        st +=1;
        ed -=1;
    }
    return arr;
    
};

function main() {
    const arr = [1,1,3,2,1];
    const arr2 = [1, 2, 3, 4, 5, 6, 7];
    console.log(countingSort(arr2));
}
