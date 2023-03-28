let valores = [true, 5, false, "hola", "adios", 2]; 

//a
if(valores[3]>valores[4]){
    alert("El mayor es "+valores[3])
}else if(valores[3]<valores[4]){
    alert("El mayor es "+valores[4])
}else{
    alert("Son iguales")
}

//b
if(valores[0]!=valores[2]){
    alert("true")
}

if(valores[0]==valores[2]){
    alert("false")
}


//c
let suma=0;
let resta=0;
let multi=1;
let div=1;
for (const iterator of valores) {
    if(isFinite(iterator)){
        suma+=iterator;
        resta-=iterator;
        multi*=iterator;
        div/=iterator;
    }
}
alert("La suma es "+suma);
alert("La resta es "+resta);
alert("La multiplicación es "+multi);
alert("La división es "+div);