const main = document.querySelector('main');
const classCard = async (value) => {
    main.innerHTML = '';
    
    const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const info = await res.json();

    const result = info.data.filter(card => card.type.includes("Monster"));

    const resultFiltered = result.filter(card => card.type.toLowerCase().includes(value.toLowerCase()));

    resultFiltered.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${card.card_images[0].image_url}" alt="${card.name}">`;

        main.appendChild(cardElement);
    });
}

export { classCard }