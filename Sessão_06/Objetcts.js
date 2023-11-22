// Objeto literal ->
const pesssoa = {
    chave: 'valor',
}
// console.log(pesssoa.chave);
// console.log(pesssoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Luizito';
pessoa1.sobrenome = 'Abuela';

delete pessoa1.nome;

pessoa1.falaNome = () => console.log(this.sobrenome);

pessoa1.idade = 30;
pessoa1.getData = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getData());

for (let i in pessoa1) {
    console.log(pessoa1.i);
}
