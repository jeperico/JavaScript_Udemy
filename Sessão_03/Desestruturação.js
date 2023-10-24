const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, , quartoNumero, , sextoNumero, ...resto] = numeros;

const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [ lista1, [quatro, cinco, seis], ...rest ] = nums;

console.log(primeiroNumero, segundoNumero, resto, lista1[2], rest)

const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
}

const { nome: nomeP1 = "Non excsiste" , sobrenome: sobP1, endereco: {rua: r}, ...res} = pessoa;

console.log(nomeP1, r);