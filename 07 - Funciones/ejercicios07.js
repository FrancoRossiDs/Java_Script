/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida(nombre, apellido){
    return (`Bienvenido ${nombre} ${apellido}`)
}


/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
function calc(num1,operador,num2){
    switch (operador){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*": 
            return num1*num2;
        case "/":
            return num1/num2;
    }       
}


/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp(max,min,lluvia){
    if(min<15 && lluvia>50){
        return 'Es recomendable salir con abrigo, recomendable un paraguas';
    }else if(min<15 && lluvia<50){
        return 'Es recomendable salir con abrigo';
    }else if(max<26 && min>17 && lluvia>50){
        return 'El día está lindo, recomendable un paraguas';
    }else if(max<26 && min>17 && lluvia<50){
        return 'El día está lindo'
    }else if(min>25 && lluvia>50){
        return 'El día estará caluroso, recomendable un paraguas';
    }else{
        return 'El día estará caluroso';
    }
}


/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:
function arrayDeStrings(array) {
    let nuevo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 5) {
            nuevo.push(array[i]);
        }
    }
    return nuevo;
}





/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
function stringInverso(str){
    let nuevo=""
    for(i=str.length-1; i>=0;i--){
        nuevo+=str[i]
    }
    return nuevo
}


/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:
function personaMásJoven(array) {
    let indiceMenor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad < array[indiceMenor].edad) {
            indiceMenor = i;
        }
    }
    return array[indiceMenor].nombre;
}


/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:
function contadorDeLetras(cadena) {
    let objeto = {};  
    for (let i = 0; i < cadena.length; i++) {
        if (objeto[cadena[i]]) {
            objeto[cadena[i]]++;
        } else {
            objeto[cadena[i]] = 1;
        }
    }
    return objeto;
}



/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
function sueldoMasAlto(array){
    let indiceMayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].sueldo > array[indiceMayor].sueldo) {
            indiceMayor = i;
        }
    }
    return array[indiceMayor]
}


/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:
function aprobados(array){
    let mayores=[]
    for(let i=0;i<array.length;i++){
        if (array[i].nota>=80){
            mayores.push(array[i].nombre)
        }
    }
    return mayores;
}


/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}