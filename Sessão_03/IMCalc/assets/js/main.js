function loadPage() {

    $('.textInput').removeClass('active');

    $('.textInput').on('focus', function () {
        $('.textInput').removeClass('active');
        $(this).addClass('active');
    })

    $('.textInput').on('blur', function () {
        $('.textInput').removeClass('active');
    });

    const Res = document.querySelector('#Result');
    const Btn = document.querySelector('#submitButton');
    
    Btn.addEventListener('click', () => {
        const Wgt = document.querySelector(`#Weight`).value;
        const Hgt = document.querySelector(`#Height`).value;

        const IMC = (Wgt / ((Hgt/100) ** 2)).toFixed(2);
        let IMCRes;

        if(IMC < 18.5){
            IMCRes = 'Peso Abaixo';
        }else if(IMC >= 18,5 && IMC < 25){
            IMCRes = 'Peso Normal';
        }else if (IMC >= 25 && IMC < 30){
            IMCRes = 'Sobrepeso';
        }else if (IMC >= 30 && IMC < 35){
            IMCRes = 'Obesidade grau I';
        }else if (IMC >= 35 && IMC < 40){
            IMCRes = 'Obesidade grau II';
        }else{
            IMCRes = 'Obesidade grau III';
        }

        Res.innerHTML = `<p> Você está com ${IMCRes} (${IMC}) </p>`
    })
}

loadPage();