const pessoa1 = {
	nome: "Luiz",
	sobrenome: "Miranda",
	idade: 25
}
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (name, lastname, age) {
	return {
	nome: name,
	sobrenome: lastname,
	idade: age
    }
}

let p1 = criaPessoa("Luiz","Miranda",25);
let p2 = criaPessoa("Maria","de Fátima",55);
let p3 = criaPessoa("Carlos","Almeida",34);

console.log(p1.nome);
console.log(p2);
console.log(p3);

const pessoa5 = {
	nome: "Luiz ",
	sobrenome: "Miranda ",
	idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
    },

    incrementaIdade () {
        this.idade++;
    }
}

pessoa5.fala()
pessoa5.incrementaIdade()
console.log(pessoa5.nome + pessoa5.sobrenome + pessoa5.idade)