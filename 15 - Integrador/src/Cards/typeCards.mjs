const main = document.querySelector('main');
import { displayresult } from '../main.mjs';

const cardsByType = async (filters) => {
    console.log('Filtros aplicados:', filters); // Imprimir los filtros aplicados
    main.innerHTML = '';
    const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
    const info = await res.json();
    
    let result = info.data;

    // Aplicar más filtros si están definidos
    if (filters.name) {
        console.log('Filtrando por nombre:', filters.name); // Imprimir el filtro de nombre
        result = result.filter(card => card.name.toLowerCase().includes(filters.name));
    }
    if(filters.id){
        console.log('Filtrando por ID:', filters.id); // Imprimir el filtro de ID
        result = result.filter(card => card.type.toLowerCase().includes(filters.id));
    }
    if (filters.attribute) {
        console.log('Filtrando por atributo:', filters.attribute); // Imprimir el filtro de atributo
        result = result.filter(card => card.attribute.toLowerCase().includes(filters.attribute.toLowerCase()));
    }

    if (filters.type) {
        console.log('Filtrando por tipo:', filters.type); // Imprimir el filtro de tipo
        result = result.filter(card => card.race.toLowerCase()===(filters.type.toLowerCase()));
    }

    if (filters.monsterClass) {
        console.log('Filtrando por clase:', filters.monsterClass); // Imprimir el filtro de clase
        result = result.filter(card => card.type.toLowerCase().includes(filters.monsterClass.toLowerCase()));
    }

    if (filters.level) {
        console.log('Filtrando por nivel:', filters.level); // Imprimir el filtro de nivel
        result = result.filter(card => card.level === parseInt(filters.level) || card.linkval === parseInt(filters.level));
    }

    
    // Muestra las cartas filtradas
    displayresult(result);
};


export { cardsByType };
