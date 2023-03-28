function comprobarCadena(cadena){
    if(cadena===cadena.toUpperCase()){
        alert("La cadena de texto es en mayúscula")
    }else if(cadena===cadena.toLowerCase()){
        alert("La cadena es en minúscula")
    }else{
        alert("La cadena es una mezcla de ambas")
    }
}

let texto=prompt("Escriba una cadena de texto")
comprobarCadena(texto);