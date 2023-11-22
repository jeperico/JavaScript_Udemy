// Exercícios envolvendo os métodos anteriores
// 
const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27, 52, 8, 10.1];

const funccao = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((acumulador, value) => acumulador += value);

console.log(funccao);