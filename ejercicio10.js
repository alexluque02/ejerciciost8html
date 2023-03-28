
function analizarPalindromo(cadena){
    let cadenaInvertida = cadena.split('').reverse().join('');
    cadena = cadena.toLowerCase();
    cadenaInvertida = cadenaInvertida.toLowerCase();
    
    if(cadena === cadenaInvertida){
        alert("Es un palíndromo");
    } else {
        alert("No es un palíndromo");
    }
}

let texto = prompt("Escriba una cadena de texto");
analizarPalindromo(texto);