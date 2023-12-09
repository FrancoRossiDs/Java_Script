import { getCharacters } from './Cards/getCards.mjs';
import { searchCards } from './Cards/searchCards.mjs';
import { setupPagination } from './Pages/paginacion.mjs';
import { cardsByType } from './Cards/typeCards.mjs';
import { atributeCard } from './Cards/cardAtribute.mjs';
import { typeCard } from './Cards/cardType.mjs';
import { classCard } from './Cards/cardClass.mjs';
import { levelCard } from './Cards/levelCards.mjs';
import { spellCard } from './Cards/spellType.mjs';
import { trapCard } from './Cards/trapCards.mjs';

getCharacters();


const monsterFilters = document.getElementById('monsterFilters');
const spellFilters = document.getElementById('spellFilters');
const trapFilters = document.getElementById('trapFilters');
const atributo= document.querySelector('#atributo');
const typo= document.querySelector('#type');
const clase= document.querySelector('#clase');
const nivel= document.querySelector('#nivel');
const spell= document.querySelector('#spellType');
const trap= document.querySelector('#trapType');
const tipoSelect = document.querySelector('#tipo');
const search = document.querySelector('#searchInput');
const type = document.querySelector('#tipo');

search.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        getCharacters();
    } else {
        searchCards(e.target.value);
    }
});

search.addEventListener('keydown', (e) => {
    if (e.target.value === "") {
        getCharacters();
    } else if (e.key === "Enter") {
        searchCards(e.target.value);
    }
});

// Inicializa la paginación
const { initPagination } = setupPagination(getCharacters);
initPagination();

type.addEventListener('change', (e) => {
    if(e.target.value === "All"){
        getCharacters();
    }else{
        cardsByType(e.target.value);
    }
})

tipoSelect.addEventListener('change', () => {
    const selectedType = tipoSelect.value;

    // Oculta todos los filtros
    monsterFilters.style.display = 'none';
    spellFilters.style.display = 'none';
    trapFilters.style.display = 'none';

    // Muestra los filtros correspondientes al tipo seleccionado
    if (selectedType === 'monster') {
        monsterFilters.style.display = 'block';
    } else if (selectedType === 'spell') {
        spellFilters.style.display = 'block';
    } else if (selectedType === 'trap') {
        trapFilters.style.display = 'block';
    }
});

atributo.addEventListener('change', (e) => {
    atributeCard(e.target.value);
})

typo.addEventListener('change', (e) => {
    typeCard(e.target.value);
})

clase.addEventListener('change', (e) => {
    classCard(e.target.value);
})

nivel.addEventListener('change', (e) => {
    levelCard(e.target.value);
})

spell.addEventListener('change', (e) => {
    spellCard(e.target.value);
})

trap.addEventListener('change', (e) => {
    trapCard(e.target.value);
})