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
