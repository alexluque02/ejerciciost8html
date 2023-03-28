function esPar(numero) {
    if(isFinite(numero)){
        return numero % 2 == 0?"Par":"Impar";
    }else{
        return "No es un número";
    }
}

let numero = prompt("Introduce un número");
alert(esPar(numero));