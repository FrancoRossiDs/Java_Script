//-------------------------------------------------------------------NO MODIFICAR 👇-------------------------------------------------------------------//
const alumnos = [
    {nombre: "Juan", apellido: "Pérez", edad: 20, dni: "12345678", examen1: 75, examen2: 80, examen3: 90, trabajoPractico1: true, trabajoPractico2: false, asistencias: 15},
    {nombre: "María", apellido: "Gómez", edad: 22, dni: "87654321", examen1: 85, examen2: 90, examen3: 95, trabajoPractico1: true, trabajoPractico2: true, asistencias: 24},
    {nombre: "Leonardo", apellido: "Avila", edad: 25, dni: "876543411", examen1: 82, examen2: 99, examen3: 90, trabajoPractico1: true, trabajoPractico2: true, asistencias: 20},
    {nombre: "Cecila", apellido: "Herrera", edad: 27, dni: "54424321", examen1: 60, examen2: 85, examen3: 95, trabajoPractico1: true, trabajoPractico2: true, asistencias: 21},
    {nombre: "Carlos", apellido: "Ramírez", edad: 23, dni: "87482321", examen1: 65, examen2: 80, examen3: 60, trabajoPractico1: false, trabajoPractico2: true, asistencias: 22},
    {nombre: "Alejandro", apellido: "González", edad: 21, dni: "86634321", examen1: 60, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 19},
    {nombre: "Laura", apellido: "Herrera", edad: 24, dni: "87321321", examen1: 100, examen2: 65, examen3: 50, trabajoPractico1: true, trabajoPractico2: true, asistencias: 23},
    {nombre: "Daniel", apellido: "Silva", edad: 25, dni: "90145321", examen1: 80, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: false, asistencias: 10},
    {nombre: "Ana", apellido: "Martínez", edad: 26, dni: "65214782", examen1: 40, examen2: 60, examen3: 40, trabajoPractico1: true, trabajoPractico2: true, asistencias: 13},
    {nombre: "Luis", apellido: "Rodríguez", edad: 28, dni: "64896414", examen1: 60, examen2: 80, examen3: 60, trabajoPractico1: false, trabajoPractico2: true, asistencias: 1},
    {nombre: "María", apellido: "Fernández", edad: 19, dni: "87986541", examen1: 65, examen2: 60, examen3: 100, trabajoPractico1: true, trabajoPractico2: true, asistencias: 24},
    {nombre: "Juan", apellido: "Morales", edad: 18, dni: "98410321", examen1: 80, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 14},
    {nombre: "Paula", apellido: "Gómez", edad: 22, dni: "20231568", examen1: 50, examen2: 100, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 17},
    {nombre: "Andrés", apellido: "Torres", edad: 30, dni: "79321782", examen1: 60, examen2: 80, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 16},
];


const bodyTableAlumnos = document.querySelector('#bodyAlumnos') // Obtenemos el cuerpo de la tabla -> donde agregas los datos correspondiente con <td></td>
const headerTable = document.querySelector('#header-table') // Obtenemos la seccion de los titulos de la tabla. Este te servirá para agregar esa 4ta columna en 'Asistencias'
const thridColumn = document.querySelector('#thrid-column') // Obtenemos el titulo de la 3 columna, que debe cambiar según lo que muestre.
const firstColumn =document.querySelector('#first-column')
const secondColumn =document.querySelector('#second-column')
let addColumn = false; // Variable que debe cambiar según -> Si existe la 4 columna tiene que tener el valor 'true'. Si no existe en 'false'
//-------------------------------------------------------------------NO MODIFICAR 👆-------------------------------------------------------------------//


// BOTON DATOS ALUMNO => Deberia devolver la tabla de alumnos con los datos personales de cada alumno (nombre, apellido, dni).
const btnDate = () =>{
    deleteColumn();
bodyTableAlumnos.innerHTML=""
alumnos.forEach(alumno=>{
    bodyTableAlumnos.innerHTML+=`
        <tr>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.dni}</td>
        </tr>
    `
})
thridColumn.innerHTML="Dni"
}


// BOTON PROMEDIOS => Deberia devolver la tabla de alumnos con el promedio de cada alumno, este consta en 3 notas (examen1, examen2, examen3).
const btnPromedios = () => {
    deleteColumn();
    bodyTableAlumnos.innerHTML=""
    alumnos.forEach(alumno=>{
        bodyTableAlumnos.innerHTML+=`
            <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.examen1}</td>
                <td>${alumno.examen2}</td>
                <td>${alumno.examen3}</td>
                <td>${Math.ceil((alumno.examen1+alumno.examen2+alumno.examen3)/3)}</td>
            </tr>
        `
    })
    thridColumn.innerHTML = "1° Nota";

    // Agrega nuevos títulos y asigna la clase .added-title
    let secondTitle = document.createElement('th');
    secondTitle.textContent = "2° Nota";
    secondTitle.classList.add('added-title');
    headerTable.appendChild(secondTitle);

    let thirdTitle = document.createElement('th');
    thirdTitle.textContent = "3° Nota";
    thirdTitle.classList.add('added-title');
    headerTable.appendChild(thirdTitle);

    let averageTitle = document.createElement('th');
    averageTitle.textContent = "Promedio";
    averageTitle.classList.add('added-title');
    headerTable.appendChild(averageTitle);

    addColumn = true;
}


// BOTON ASISTENCIAS => Deberia devolver la tabla de alumnos con la cantidad de asistencia de los alumnos sobre el total de 24 clases. (ej: alumno asiste 13 clases. deberia devolver en la columna 13/24).
// Además deberás crear una columna* con el porcentaje de asistencias.
// *la columna se deberá eliminar si se selecciona otro boton
const deleteAddedTitles = () => {
    let addedTitles = document.querySelectorAll('.added-title');
    addedTitles.forEach(title => {
        title.remove();
    });
};



// BOTON ASISTENCIAS
const btnAsistencia = () => {
    deleteColumn();
    bodyTableAlumnos.innerHTML = "";
    alumnos.forEach(alumno => {
        bodyTableAlumnos.innerHTML += `
            <tr>
                <td>${alumno.asistencias}/24</td>
            </tr>
        `;
    });
    firstColumn.innerHTML = "Asistencias";
    secondColumn.innerHTML = "";
    thridColumn.innerHTML = "";  // Limpiar el título de la tercera columna

    // Eliminar todos los títulos adicionales
    deleteAddedTitles();

    addColumn = false;
};


// BOTON APROBADOS => - Deberia devolver la tabla de alumnos en ella solo aquellos que tengan aprobado el cursado, en base a las siguientes condiciones:
// Un promedio ≥ 70 y un porcentaje de asistencia ≥ 70
const btnAprobados = () => {
    deleteColumn();
    bodyTableAlumnos.innerHTML = "";

    // Filtrar los alumnos aprobados (promedio >= 70 y asistencia >= 70)
    const aprobados = alumnos.filter(alumno => {
        const promedio = Math.ceil((alumno.examen1 + alumno.examen2 + alumno.examen3) / 3);
        const porcentajeAsistencia = (alumno.asistencias / 24) * 100;
        return promedio >= 70 && porcentajeAsistencia >= 70;
    });

    // Mostrar la tabla con los alumnos aprobados
    aprobados.forEach(alumno => {
        bodyTableAlumnos.innerHTML += `
            <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.examen1}</td>
                <td>${alumno.examen2}</td>
                <td>${alumno.examen3}</td>
                <td>${Math.ceil((alumno.examen1 + alumno.examen2 + alumno.examen3) / 3)}</td>
            </tr>
        `;
    });

    // Actualizar los títulos
    firstColumn.innerHTML = "Nombre";
    secondColumn.innerHTML = "Apellido";
    thridColumn.innerHTML = "Examen1";
    headerTable.innerHTML += `<th class='added-title'>Examen2</th>`;
    headerTable.innerHTML += `<th class='added-title'>Examen3</th>`;
    headerTable.innerHTML += `<th class='added-title'>Promedio Aprobados</th>`;


    addColumn = true;
}


// Deberia devolver la tabla de alumnos con aquellos que no aprobaron el cursado.
const btnReprobados = () => {
    deleteColumn();
    bodyTableAlumnos.innerHTML = "";

    // Filtrar los alumnos reprobados (promedio < 70 y asistencia < 70)
    const reprobados = alumnos.filter(alumno => {
        const promedio = Math.ceil((alumno.examen1 + alumno.examen2 + alumno.examen3) / 3);
        const porcentajeAsistencia = (alumno.asistencias / 24) * 100;
        return promedio < 70 && porcentajeAsistencia < 70;
    });

    // Mostrar la tabla con los alumnos reprobados
    reprobados.forEach(alumno => {
        bodyTableAlumnos.innerHTML += `
            <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.examen1}</td>
                <td>${alumno.examen2}</td>
                <td>${alumno.examen3}</td>
                <td>${Math.ceil((alumno.examen1 + alumno.examen2 + alumno.examen3) / 3)}</td>
            </tr>
        `;
    });

    // Actualizar los títulos
    firstColumn.innerHTML = "Nombre";
    secondColumn.innerHTML = "Apellido";
    thridColumn.innerHTML = "Examen1";
    headerTable.innerHTML += `<th class='added-title'>Examen2</th>`;
    headerTable.innerHTML += `<th class='added-title'>Examen3</th>`;
    headerTable.innerHTML += `<th class='added-title'>Promedio Reprobados</th>`;

    addColumn = true;
}


// AYUDA => esta función te ayudará a eliminar la columna extra que tienes que agregar en 'BOTON ASISTENCIAS'. 
// Para que esta funcione, la columna que agregues debe tener como ID => 'delete'
// NO ES NECESARIO MODIFICAR ESTA FUNCION
const deleteColumn = () => {
    if (addColumn) {
        let addedTitles = document.querySelectorAll('.added-title');
        addedTitles.forEach(title => {
            title.remove();
        });
        thridColumn.innerHTML = "..."; // Restablece el contenido del título original
        addColumn = false;
    }
}

    
