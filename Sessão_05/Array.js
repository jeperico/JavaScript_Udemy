const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
const novo = [...nomes]; // spread operator
nomes[2] = 'Matheus';
delete nomes[2];
novo.pop();
console.log(nomes);
console.log(novo);