// const originalCFP = "705.484.450-52";

function crica() {
    
    let boxV = document.querySelector('#textBox');
    let box = boxV.value;
    if (box.length !== 14) {
        console.log('Valor inválido');
        return;
    }
    const originalCFP = box;
    let modifiedCPF = originalCFP.slice(0, 12).replace(/\D+/g, ''); // 705484450   // /\D+/g representa tudo que não é um número

    function calcNumber(t) {
        if (typeof modifiedCPF === `undefined` || modifiedCPF.length !== t) return;

        constant = modifiedCPF.length + 1;
        acumulator = 0;
        for (i of modifiedCPF) {
            acumulator += i * constant;
            constant--;
        }
        const number = 11 - (acumulator % 11) > 9 ? 0 : 11 - (acumulator % 11);
        modifiedCPF = modifiedCPF.concat(number);
        return number + '';
    }

    const firstNumber = calcNumber(9);
    const secondNumber = calcNumber(10);

    const div = document.querySelector('#div');
    if (firstNumber === originalCFP[12] && secondNumber === originalCFP[13]) {
        console.log(`O CPF ${originalCFP} é valido`)
        div.innerHTML = `O CPF ${originalCFP} é valido`;
    } else {
        console.log(`O CPF ${originalCFP} é invalido`)
        div.innerHTML = `O CPF ${originalCFP} é invalido`;
    }

}