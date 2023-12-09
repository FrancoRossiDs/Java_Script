// searchCards.mjs
const searchCards = async (value) => {
    const main = document.querySelector('main');
    main.innerHTML = '';

    try {
        const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const data = await res.json();
        
        if (data.data && Array.isArray(data.data)) {
            const result = data.data.filter(card => card.name.toLowerCase().includes(value.toLowerCase()));

            result.forEach(card => {
                if (card.card_images && Array.isArray(card.card_images)) {
                    const imageUrl = card.card_images[0].image_url;

                    const cardElement = document.createElement('div');
                    cardElement.classList.add('card');
                    cardElement.innerHTML = `<img src="${imageUrl}" alt="${card.name}">`;

                    main.appendChild(cardElement);
                }
            });
        } else {
            console.error('La propiedad "data" no es un array o no existe en la respuesta de la API');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};

export { searchCards };
