// RELÓGIO

const titulo = document.querySelector('h1');
const section = document.querySelector('section')
const containerRelogio = document.querySelector('.containerRelogio');

function horario () {
    
    const tempo = new Date();
    const horas = tempo.getHours();
    const minutos = tempo.getMinutes();
    const segundos = tempo.getSeconds();

    const horasFormatadas = horas < 10 ? `0${horas}` : horas;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

    titulo.innerHTML = `<h1>${horasFormatadas}:${minutosFormatados}:${segundosFormatados}</h1>`

}

horario();
setInterval(horario, 1000);

// EFEITO ARRASTAR PARA O LADO

let posicaoInicial;
let arrastando = false;

section.addEventListener('mousedown', (evento) => {
    posicaoInicial = evento.clientX;
    arrastando = true;
}) 
    
document.addEventListener('mousemove', (evento) => {
    
    if (arrastando) {
        const distancia = evento.clientX - posicaoInicial;
        containerRelogio.style.transform = `translateX(${distancia}px)`;
        }
})

document.addEventListener('mouseup', (evento) => {
    
    const distancia = evento.clientX - posicaoInicial;
    console.log(distancia);

    if (distancia <= -200) {
        containerRelogio.style.transform = `translateX(-2000px)`
    } else {
        containerRelogio.style.transform = `translateX(0)`;
    }

    arrastando = false;
      
})

// CRONOMETRO