// defineProperty -> Singular
// defineProperties -> Plural

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra dentro do Array mesmo não existindo
        // value: estoque, // Joga o valor de estoque no valor da chave
        // writable: false, // Indica se o valor pode ser alterado ou não
        configurable: false, // Indica se a chave pode ser configuravel
        get: () => estoque,
        set: (value) => {
            if(typeof value !== 'number') return;
            estoque = value;
        }
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra dentro do Array mesmo não existindo
            value: nome, // Joga o valor de estoque no valor da chave
            writable: true, // Indica se o valor pode ser alterado ou não
            configurable: true // Indica se a chave pode ser configuravel
        },
        preco: {
            enumerable: true, // Mostra dentro do Array mesmo não existindo
            value: preco, // Joga o valor de estoque no valor da chave
            writable: true, // Indica se o valor pode ser alterado ou não
            configurable: true // Indica se a chave pode ser configuravel
        }
    })
}

const p1 = new Produto('camiseta', 20, 101);
p1.estoque = '1';
console.log(p1.estoque);


console.log(Object.keys(p1));
