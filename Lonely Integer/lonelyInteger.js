main();

function lonelyinteger(a) {
    if(a.length == 1){
        return a[0];
    }
    for(var i=0; i < a.length; i++){
        var state = true;
        for(var k = 0; (k < a.length) && state; k++){
            if(a[i] === a[k] && i!==k){
                state = false;
            }
        }
        if(state){
            return a[i];
        }
    }

}

function main() {
    a = [1,2,3,4,3,2,1];
    console.log(lonelyinteger(a));
}
