// RELÓGIO

const titulo = document.querySelector('.relogio');
const section = document.querySelector('section')
const containerRelogio = document.querySelector('.containerRelogio');
const containerCronometro = document.querySelector('.containerCronometro');
const h1cronometro = document.querySelector('.cronometro')

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
        containerCronometro.classList.add('active');
        containerRelogio.classList.remove('active');
    } else {
        containerRelogio.style.transform = `translateX(0)`;
    }

    arrastando = false;
      
})

// CRONOMETRO

let contador = 0

function cronometro () {
    contador++
    h1cronometro.innerHTML = `<h1>${contador}</h1>`
}

setInterval(cronometro, 1000)