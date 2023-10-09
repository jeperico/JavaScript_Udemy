function meuEscopo() {

    const Frm = document.querySelector('#Form')
    
    /*

    Frm.onSubmit = function (e) {
        e.preventDefault();
    };
    
    Frm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    */

    const usuarios = [];

    const Btn = Frm.querySelector('#usSubmit');
    let contador = 1;
    
    Btn.addEventListener('click', () => {
        const Nam = Frm.querySelector('#usName').value;
        const Lnm = Frm.querySelector('#usLastName').value;
        const Wgt = Frm.querySelector('#usWeight').value;
        const Hgt = Frm.querySelector('#usHeight').value;
        const Res = document.querySelector('#resArea');

        let object = {
            Nome: Nam,
            Sobrenome: Lnm,
            Peso: Wgt,
            Altura: Hgt,
            "Número de Usuário": contador
        }

        usuarios.push(object)

        console.log(object)
        console.log(usuarios)

        Res.innerHTML += `<p>Olá ${Nam} ${Lnm}, você pesa ${Wgt} e sua altura é ${Hgt}. Parabéns, você é o usuário nº ${contador}</p>`

        contador++;
    });

}
meuEscopo();