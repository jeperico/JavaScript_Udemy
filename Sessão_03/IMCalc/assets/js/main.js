function loadPage() {

    const TI = document.querySelector('.textInput');
    TI.classList.remove('active')

    $('.textInput').on('focus', function () {
        TI.classList.remove('active');
        this.classList.add('active');
    })

    $('.textInput').on('blur', function () {
        $('.textInput').removeClass('active');
    });

    const Btn = document.querySelector('#submitButton');

    Btn.addEventListener('click', () => {
        const Wgt = Number(document.querySelector(`#Weight`).value);
        const Hgt = Number(document.querySelector(`#Height`).value);

        if (!Wgt && !Hgt) {
            msg("Ambos os valores são inválidos", 0, false)
            return;
        }
        if (!Wgt) {
            msg("Peso inválido", 0, false)
            return;
        }
        if (!Hgt) {
            msg("Altura inválida", 0, false)
            return;
        }

        function IMCValue(Peso, Altura) {
            const IMC = (Peso / ((Altura / 100) ** 2)).toFixed(2);
            return (IMC);
        }

        function IMC(IMC) {

            let nivel = ['Obesidade grau III', 'Obesidade grau II', 'Obesidade grau I', 'Sobrepeso', 'Peso Normal', 'Peso Abaixo']

            if (IMC >= 40) return nivel[0]
            if (IMC >= 35) return nivel[1]
            if (IMC >= 30) return nivel[2]
            if (IMC >= 25) return nivel[3]
            if (IMC >= 18.5) return nivel[4]
            if (IMC < 18.5) return nivel[5]
        }


        let ResultadoIMCValor = IMCValue(Wgt, Hgt);
        let ResultadoIMC = IMC(ResultadoIMCValor);
        msg(ResultadoIMC, ResultadoIMCValor, true);
    })

    const p = document.createElement('p');
    p.classList.add('pCreate');
    const Res = document.querySelector('#Result');
    Res.appendChild(p);

    function msg(Retorno, imc, isValid) {
        if (isValid) {
            p.innerHTML = `Você está com ${Retorno} (${imc}).`;
            p.style.backgroundColor = 'green';
        } else {
            p.innerHTML = `${Retorno}.`
            p.style.backgroundColor = 'red';
        }
    }
}

loadPage();