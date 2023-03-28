let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


let dni = prompt("Introduce tu DNI");
if (dni > 0 && dni < 99999999) {
    let letraDni = prompt("Introduce la letra de tu DNI");
    if (letras[dni % 23] == letraDni.toUpperCase()) {
        alert("Letra correcta");
    } else {
        alert("Letra incorrecta");
    }
} else {
    alert("DNI incorrecto");
}
