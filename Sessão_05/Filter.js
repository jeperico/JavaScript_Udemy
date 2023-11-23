// Filter -> Sempre retornará um Array com a mesma quantidade de elementos ou menos;

const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27, 52, 8, 10.1];

// function confere(Array) {
//     arrayResult = [];
//     for(i of Array){
//         if(i > 10){
//             arrayResult.push(i)
//         }
//     }
//     return arrayResult;
// }
// console.log(confere(numbers));

// function callbackFilter(valor, indice, array) {

const numbersFilter = numbers.filter(value => value > 10);
console.log(numbersFilter);

//

const people = [
    {nome: 'Anna', idade: 17},
    {nome: 'Ana', idade: 50},
    {nome: 'Aline', idade: 94},
    {nome: 'Angélica', idade: 9},
    {nome: 'Amanda', idade: 25},
    {nome: 'Alessandra', idade: 12},
];

const pBigName = people.filter(value => value.nome.length > 5);
const pOldage = people.filter(value => value.idade > 50);
const pLetterA = people.filter(value => value.nome[0] === "A");
console.log(pBigName, pOldage, pLetterA);
