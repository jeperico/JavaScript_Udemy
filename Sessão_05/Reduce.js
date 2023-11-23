// Soma todos os elementos do Array
//

const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27, 52, 8, 10.1];
const total = numbers.reduce((acumulador, value) => {
    return acumulador += value;
}, 0 /* Valor que inicia o acumulador*/)

// console.log(total);
//

const people = [
    { nome: 'Anna', idade: 17 },
    { nome: 'Ana', idade: 50 },
    { nome: 'Aline', idade: 94 },
    { nome: 'Angélica', idade: 9 },
    { nome: 'Amanda', idade: 25 },
    { nome: 'Alessandra', idade: 12 },
];

const oldPerson = people.reduce((acumulador, value) => {
    if (value.idade > acumulador.idade) return acumulador = value;
        return acumulador;
});

console.log(`${oldPerson.nome} com ${oldPerson.idade} anos.`);
