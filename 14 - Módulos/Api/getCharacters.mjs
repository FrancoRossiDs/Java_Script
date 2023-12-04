const getCharacters= async()=>{
    const body = document.querySelector('body')
    const res=await fetch(`https://rickandmortyapi.com/api/character/?page=2`)
    const data=await res.json()
    console.log(data)
    data.results.forEach(char => {
        body.innerHTML += `
        ${char.name}
        ${char.id}
        ${char.image}
        `
    })}

    getCharacters()