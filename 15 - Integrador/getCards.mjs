const getCards = async () => {
    const body = document.querySelector('body');
    const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
    const dataz = await res.json();

    dataz.data.forEach(card => {
        // Crear un div para cada carta con la clase 'card'
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Agregar el nombre de la carta al div
        cardElement.innerHTML = `
            <img src=${card.card_images[0].image_url} alt="${card.name}">
            <p>Nombre: ${card.name}</p>
            <p>${card.type}</p>
            <p>${card.race}</p>
            <p>${card.desc}</p>
        `;

        // Agregar el div al cuerpo del documento
        body.appendChild(cardElement);
    });
};

getCards();
