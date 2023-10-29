// arguments sustenta todos os argumentos passados na funçao, quando usado a palavra function, Arrow function no.

function fucao() {
    console.log(arguments)
}
fucao('Zézinho', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function somar(a = 2) {
    let total = 0;
    for (argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}

somar(undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10, 123423, 23432423, 234);

function multiplicacao(m) {
    return function(n) {
        return n * m
    }
}
const x2 = multiplicacao(2);
const x3 = multiplicacao(3);
const x4 = multiplicacao(4);

console.log(x2(2), x3(2), x4(2))