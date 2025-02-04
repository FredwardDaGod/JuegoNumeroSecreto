let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
let elementoHTML = document.querySelector (elemento);
elementoHTML.innerHTML = texto;
return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);
    console.log (numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){

    asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos===1)?'vez' : 'veces'}`)
    ;
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        
        }
        else {
                asignarTextoElemento ('p','El numero secreto es mayor');
            
            } 
            intentos++;
            limpiarCaja();
    }
return;
}
 function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
  
 }
 function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
 console.log(listaNumerosSorteados);
 if (listaNumerosSorteados.length ==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
 }
 //Si el numero generado esta inlcuido en la lista

if (listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
} else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
 }


asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;


}

function reiniciarJuego(){
    //limpiarCaja
    limpiarCaja();
    //Mensaje
     //Generar el numero aleatorio
    condicionesIniciales();
   //Deshabilitar el boton de juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();