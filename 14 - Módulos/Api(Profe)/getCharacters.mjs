const getCharacters = async (page) => {
    const body = document.querySelector('body')
    const res =await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data =await res.json()
    data.results.forEach(char => {
        body.innerHTML += `
        ${char.name}
        ${char.id}
        ${char.image}
        `
    })
}

export { getCharacters }