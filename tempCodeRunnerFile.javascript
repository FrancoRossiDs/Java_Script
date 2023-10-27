function primerDivisible(divisor, dividendo) {
    // Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
    // Tu código:👇
    let resultado = null;
        while (resultado == null) {
        if (dividendo%divisor == 0) {
            resultado = dividendo;
        } else {
            dividendo++;
        }
        }
    return resultado;
    
    }
    console.log(primerDivisible(1,7))