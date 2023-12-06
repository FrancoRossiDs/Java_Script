import { getCharacters } from "./getCharacters.mjs";


const select = document.querySelector('#chars')
const searchInput=document.querySelector("#search")
const StatusInput=document.querySelector("#status")



select.addEventListener('change', (e) => getCharacters(e.target.value))
select.addEventListener()

// async function getChars(){
//     try{
//         const res =await fetch('https://rickandmortyapi.com/api/location') 
//         const data =await res.json()
//         console.log(data)
//         // data.results.forEach(char => {
//         //     // document.querySelector('body').innerHTML += `
//         //     // <h1>${char.name}</h1>
//         //     // <small>${char.id}</small>
//         //     // <p>${char.type}</p>
//         //     // `
//         // })
//     }catch{
//         console.log("algo falló")
//     }
// }

// getChars()

// // try{
// //     fetch("https://rickandmortyapi.com/api/character/?page=2")
// //         .then(res => res.json())
// //         .then(data => console.log(data))
        
// // }catch{
// //     console.error("Algo salio mal")
// // }