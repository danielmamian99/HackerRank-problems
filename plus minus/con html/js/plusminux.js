const boton = document.querySelector('#boton');
const lista = document.querySelector('#elementos');
const solve = document.querySelector('.solve');

class Respuesta {
    constructor(positivo, negativo, cero) {
        this.positivo = positivo;
        this.negativo = negativo;
        this.cero = cero;
    }
    updatePositivo() {
        this.positivo++;
    }
    updateNegativo() {
        this.negativo++;
    }
    updateCero() {
        this.cero++;
    }
}

function limpiarVista(){
    while (solve.firstChild) {
        solve.removeChild(solve.firstChild);
    }
}
function mostrarRespuesta(array, size){
    for(let i =0; i <array.length; i++){
        if ( array[i] > 0){
            array[i] = parseFloat(array[i]/size).toPrecision(6);
        }
        const row = document.createElement('li');
        row.innerText = array[i];
        solve.appendChild(row);
    }
}
boton.addEventListener('click', (e) =>{
    e.preventDefault();
    limpiarVista();
    const respuestas = [0,0,0];
    temp = lista.value.split(',');
    if(temp.length > 0){
        temp.forEach(e => {
            if(e > 0){
                respuestas[0]++;
            }else if (e < 0){
                respuestas[1]++;
            }else{
                respuestas[2]++;
            } 
        });
        mostrarRespuesta(respuestas, temp.length);
    }
    else{
        console.log("la lista esta vacía");
    }
})