// main.mjs

import { getCharacters } from './Cards/getCards.mjs';
import { setupPagination } from './Pages/paginacion.mjs';
import { cardsByType } from './Cards/typeCards.mjs';

const main = document.querySelector('main');

getCharacters();

const reset= document.querySelector('#resetButton');
const monsterFilters = document.getElementById('monsterFilters');
const spellFilters = document.getElementById('spellFilters');
const trapFilters = document.getElementById('trapFilters');
const atributo = document.querySelector('#atributo');
const typo = document.querySelector('#type');
const clase = document.querySelector('#clase');
const nivel = document.querySelector('#nivel');
const spell = document.querySelector('#spellType');
const trap = document.querySelector('#trapType');
const tipoSelect = document.querySelector('#tipo');
const search = document.querySelector('#searchInput');
const type = document.querySelector('#tipo');

// Inicializa la paginación
const { initPagination } = setupPagination(getCharacters);
initPagination();


const filters = {
    id: null,
    name: null,
    attribute: null,
    type: null,
    monsterClass: null,
    level: null,
};

reset.addEventListener('click', () => {
    getCharacters();
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';
    reset.style.display = 'none';
})

type.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.id= null;
        cardsByType(filters);
    } else {
        filters.id= e.target.value;
        cardsByType(filters);
}});

tipoSelect.addEventListener('change', () => {
    const selectedType = tipoSelect.value;

    // Restablecer los subfiltros cuando cambias el tipo principal
    filters.type = null;
    filters.spellType = null;  // Restablecer el subfiltro de hechizos
    filters.trapType = null;   // Restablecer el subfiltro de trampas

    // Oculta todos los filtros
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';
    reset.style.display = 'none';

    // Muestra los filtros correspondientes al tipo seleccionado
    if (selectedType === 'monster') {
        monsterFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'spell') {
        spellFilters.style.display = 'block';
        reset.style.display = 'block';
    } else if (selectedType === 'trap') {
        trapFilters.style.display = 'block';
        reset.style.display = 'block';
    }

    // Aplicar los filtros cuando cambias el tipo principal
    cardsByType(filters);
});


async function displayresult(result) {
    main.innerHTML = '';
    result.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${card.card_images[0].image_url}" alt="${card.name}">`;
        main.appendChild(cardElement); 
    });
}


search.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        getCharacters();
    } else {
        filters.name = e.target.value;
        cardsByType(filters);
    }
});

search.addEventListener('keydown', (e) => {
    if (e.target.value === "") {
        getCharacters();
    } else if (e.key === "Enter") {
        filters.name = e.target.value;
        cardsByType(filters);
    } else if (e.key === "Escape") {
        e.target.value = "";  
        getCharacters();
    }
});

atributo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.attribute = null;
        cardsByType(filters);
    } else {
        filters.attribute = e.target.value;
        cardsByType(filters);
    }
});


typo.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.type = null;
        cardsByType(filters);
    }else{
        filters.type = e.target.value;
        cardsByType(filters);
    }
    
});

clase.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.monsterClass = null;
        cardsByType(filters);
    }else{
        filters.monsterClass = e.target.value;
        cardsByType(filters);
    }
});

nivel.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        filters.level = null;
        cardsByType(filters);
    }else{
        filters.level = e.target.value;
        cardsByType(filters);
    } 
});

spell.addEventListener('change', (e) => {
    console.log(e.target.value);  // Agrega esta línea para imprimir el valor
    if(e.target.value === "null"){
        filters.type = null;
        cardsByType(filters);
    } else {
        filters.type = e.target.value;
        cardsByType(filters);
    }
});

trap.addEventListener('change', (e) => {
    if (e.target.value === "null") {
        // Restablecer el subfiltro de trampas
        filters.trapType = null;
    } else {
        // Aplicar el subfiltro de trampas
        filters.trapType = e.target.value;
    }
    // Aplicar los filtros
    cardsByType(filters);
});


export {displayresult}