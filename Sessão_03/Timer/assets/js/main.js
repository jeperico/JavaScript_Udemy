function createHour(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const Timer = document.querySelector('#Timer');
const Span = document.querySelector('#Buttons');
let segundos = 0;
let timer;

function startTime() {
    timer = setInterval(() => {
        segundos++;
        Timer.innerHTML = createHour(segundos);
    })
}

Span.addEventListener('click', function (e) {
    const ele = e.target;

    if (ele.classList.contains('Iniciar')) {
        Timer.classList.remove('pausado');
        clearInterval(timer);
        startTime();
    }
    if (ele.classList.contains('Pausar')) {
        Timer.classList.add('pausado');
        clearInterval(timer);
    }
    if (ele.classList.contains('Zerar')) {
        Timer.classList.remove('pausado');
        clearInterval(timer);
        Timer.innerHTML = `00:00:00`;
        segundos = 0;
    }
})
