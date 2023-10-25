const Timer = document.querySelector('#Timer');
const Iniciar = document.querySelector('#Iniciar');
const Pausar = document.querySelector('#Pausar');
const Zerar = document.querySelector('#Zerar');
var time = (new Date(0, 0, 0)).toLocaleTimeString('pt-BR', {hour12: false});

Iniciar.addEventListener('click', function(){
    setInterval(() => console.log((new Date(0, 0, 0 + 1000)).toLocaleTimeString('pt-BR', {hour12: false})), 1000);
});

Pausar.addEventListener('click', function(){

});

Zerar.addEventListener('click', function(){
    return Timer.innerText = "00 : 00 : 00";
});
