const mensaje = document.querySelector('#chat')
const btnMensaje = document.getElementById('send-msg')
const contenedor = document.querySelector('#contenedor')

function guardarMensaje(msg){
    const p = document.createElement('p')
    p.textContent = msg
    p.classList.add('resp-user')
    contenedor.appendChild(p)
    mensaje.value = ""
}

function respuestaBot(msg){
    console.log(msg)
    const mensaje = msg.toLowerCase()
    let resp;
    if(mensaje.includes('hola') && mensaje.includes('buenas') ){
        resp = "hola como estas?"
    }else if(mensaje.includes('chau')){
        resp = "Chau, hasta luego!"
    }else{
        resp = "perdona no entendí"
    }
    const div = document.createElement('div')
    div.innerHTML = `<img class="img-bot" src="https://img.freepik.com/vector-premium/chat-bot-vector-logo-diseno-concepto_418020-241.jpg" alt="">
    <p class="resp-bot">${resp}</p>`
    div.classList.add('contenedor-bot')
    contenedor.appendChild(div)
    contenedor.scrollTop = contenedor.scrollHeight
}

btnMensaje.addEventListener('click', () => {
    const msg = mensaje.value
    guardarMensaje(msg)
    respuestaBot(msg)
})

mensaje.addEventListener('keydown', (e) => {
    const msg = mensaje.value
    if(e.key === "Enter" && mensaje.value != ""){
        e.preventDefault();
        guardarMensaje(msg)
        respuestaBot(msg)
    }
})