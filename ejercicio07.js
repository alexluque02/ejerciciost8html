let numero = prompt("Introduce un número");

if (isFinite(numero)) {
    let result = numero;
    for (let i = numero - 1; i > 0; i--) {
        result *= i;
    }
    alert(result);
}else{
    alert("No es un número");
}