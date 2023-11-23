 // Map -> Substitui os valores, retorna um Array do mesmo tamanho do original

const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27, 52, 8, 10.1];
const double = numbers.map(value => value * 2);
console.log(double)

//

const people = [
    { nome: 'Anna', idade: 17 },
    { nome: 'Ana', idade: 50 },
    { nome: 'Aline', idade: 94 },
    { nome: 'Angélica', idade: 9 },
    { nome: 'Amanda', idade: 25 },
    { nome: 'Alessandra', idade: 12 },
];

const string = people.map(value => `${value.nome}`);
console.log(string);

const age = people.map(value => value.idade);
console.log(age);

const ID = people.map((value, indice) => {
    value.id = indice;
    return value;
});
console.log(ID);

// Map altera o objeto original
