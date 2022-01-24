main();
function findMedian(arr) {
    var aux = [arr[0]];
    var state = true;
    for(var i=1; i < arr.length ; i++){
        if(aux[i-1] > arr[i] ){
            for(var k = 0; (k < i) && state ; k++){
                if(aux[k] >= arr[i]){
                    if(k !== aux.length){
                        var temp = aux.slice(k,aux.length);
                        
                    }else{
                        var temp = aux.slice(k);
                    }
                    
                    temp.unshift(arr[i]);
                    aux = aux.slice(0,k);
                    aux = aux.concat(temp);
                    
                    state = false;
                }
            }
        }else{
            aux.push(arr[i]);
        }
        state = true;
    }
    if(aux.length%2 === 0){
        var valor = (aux[Math.ceil(aux.length/2)-1] + aux[Math.floor(aux.length/2)])/2;
    }else{
        var valor = aux[Math.floor(aux.length/2)];
    }

    return valor;
}

function main() {
    arr = [1,2,3,4,5,6,0];
    arr5 = [3,4,5,6,0,1,2];
    arr2= [12,12,13,14,17,20,21];
    arr4= [40,43,44,46,48,49,49,50];
    arr3 =[1,2,2,3,3,0,0,1,2,3,0,10,10,1];
    console.log(findMedian(arr4));
}


