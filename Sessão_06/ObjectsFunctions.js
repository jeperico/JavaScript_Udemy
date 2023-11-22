// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Lourenço', 'do Moro');
console.log(p1);
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); // Congela todos os objetos feitos com a função
}

Object.freeze(p1);// Trava o objeto na memória
// Também funciona com Arrays

const p2 = new Pessoa('Josselito', 'Camleo');
console.log(p2);

// new -> {} <- cria um objeto e atribui o 'this' ao objeto
