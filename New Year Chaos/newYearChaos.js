main();



function minimumBribes(q) {
    let num = 0
    let chaotic = false
    for(let i=q.length-1; i>=0; i--) {
        if(q[i]-i>3) chaotic = true
        for(let j=q[i]-2;j<i;j++){
            if(q[j]>q[i]) num++
        }
    }
    if(chaotic) console.log("Too chaotic")
    else console.log(num)
};

function main() {
    const arr = [2, 1, 5, 3, 4];
    const arr2 = [2, 5, 1, 3, 4];
    const arr3 = [1, 2, 5, 3, 7, 8, 6, 4];
    const arr4 = [1, 2, 5, 3, 7, 8, 6, 4]; 
    const progress1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const pruebas = [2, 3, 4, 1, 5];
    minimumBribes2(arr4);
}
