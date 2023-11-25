function arrayDuplicados(array) {
    // Por parámetros, recibirás un array de números, tendrás que devolver el array con sus valores duplicados. Usa el método .map().
    // Tu código:
    var dup = array.map(x => x*2 ) 

    return dup; // Asegúrate de devolver el nuevo array duplicado.
}         

const nombresPersonas = (array) => {
    // Por parámetros, recibirás un array de objetos. Tendrás que iterar entre ellos y devolver un array con todos los nombres.
    // Usa el método .map(). Ayuda: la propiedad de los nombres es 'name'.
    // Tu código:
    
    // Utilizamos map para iterar sobre el array y extraer la propiedad 'name' de cada objeto.
    const nombres = array.map(persona => persona.name);
    
    return nombres; // Devolvemos el nuevo array con los nombres.
}

function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    const arrayImpuestos = array.map(x => {
        const impuesto = Math.floor(x.precio * 0.10); // Redondea al número entero más cercano
        const xConImpuesto = {
            ...x,
            impuestos: impuesto
        };
        return xConImpuesto;
    });
    return arrayImpuestos;        
}

function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:
    const mayor = array.filter(x=>x.length>=5);
    return mayor
}

function filtaradoPorCategoria(array, categoria) {
    // Recibirás por parámetros un array de objetos con películas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria: }.
    // Deberás usar el método filter para devolver un array con los nombres de las películas que sean de la categoría pedida.
    // Tu código:
    const peliculasFiltradas = array.filter(pelicula => pelicula.categoria === categoria);
    const peliculasNombre = peliculasFiltradas.map(pelicula => pelicula.titulo);
    return peliculasNombre;
}

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examen (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:
    const alumnoAprobado=array.filter(alumno=>alumno.nota>=70 && alumno.inscripcion == true)
    return alumnoAprobado
}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈
    const nombresFiltrados = nombres.filter(nombre => nombre.toLowerCase().includes(search.toLowerCase()));
    
    return nombresFiltrados;

}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}