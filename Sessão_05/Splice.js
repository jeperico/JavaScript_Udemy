const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(0, 0, 'Jorge', 'Matheus') (começo, remove, newElement1, newElement2, newElement3)
const saiu = nomes.splice(-2, 1, 'Jorge', 'Matheus');

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const saiu2 = nomes2.splice(0, Number.MAX_VALUE, 'Jorge', 'Matheus');

console.log(nomes, nomes2);
console.log(saiu, saiu2);
console.log(Number.MAX_VALUE);

// Number.MAX_VALUE == 1.7976931348623157e+308
