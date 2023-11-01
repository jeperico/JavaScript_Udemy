// Função construtora -> objetos
// Função fábrica -> objetos
// Fábrica -> criaPessoa
// Construtora -> Pessoa (new)

// new -> Cria um objeto vazio. e retorna em uma variável por exemplo 

// declarar atributo anônimo ou privado com let ou const ao invéz de let (não disponível com notação de ".");

function Pessoa(nome, sobrenome) {
    let ID;

    const medotoInterno = () => {
        ID = 12345678910;
    }
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`Olá ${nome}, sou um método!`);
    }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Benito', 'Camelo');
