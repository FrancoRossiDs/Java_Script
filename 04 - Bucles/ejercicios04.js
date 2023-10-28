function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
const vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;
    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i].toLowerCase(); 
        if (vocales.includes(char)) {
            contador++;}
    }
    return contador;
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
let resultado = null;
    while (resultado == null) {
        if (dividendo%divisor == 0) {
            resultado = divisor;
        } else {
            divisor++;
        }
    }
    return resultado;
}

function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    for(let i=0; i<=100;i++)
    if (i==x){
        return "El numero X es: " + i;
    }
}


function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let suma =0;
    for(let i=0; i<= num; i++){
        suma+=i;
    }
    return suma;
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a decimal
// tu código:👇
    let decimal= 0
    for(let i = num.length-1;i>=0;i--){
        const valor= parseInt(num[i])
        decimal+=valor*Math.pow(2, num.length-1 -i);    
    }
    return decimal;
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇

    let a=0;
    let b=1;
    for(let i=1;i<=n-1;i++){
        temp= a + b;
        a = b;
        b = temp;
    } 
    return b
}
function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    let c =0
    for(let i=0;i<=numero;i++){
        if(numero % i ==0 ){
            c+=1
        }
    }
    if (c==2){
        return (numero + " es primo.")
    }else{
        return (numero + " no es primo.")
    }
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
nCadena="";
    for(let i =cadena.length-1;i>=0;i--){
        nCadena+=cadena[i];
    }
    return nCadena
}
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}