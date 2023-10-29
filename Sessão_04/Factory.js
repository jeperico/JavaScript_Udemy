function createPerson(name, lastName, weight, height) {
    return {
        name,
        lastName,

        // Getter (get trata o método como se fosse um atributo)
        get fullName() {
            return `${this.name} ${this.lastName}`
        },
        // Setter (set altera o valor dos atributos)
        set fullName(valor) {
            valor = valor.split(' ');
            this.name = valor.shift();
            this.lastName = valor.join(' ')
        },

        fala(assunto) {
            return `${this.name} ${this.lastName} está falando sobre ${assunto}. Ele está com ${this.peso} kgs.`
        }, // Método

        peso: weight,
        altura: height,

        get imc() {
            const imcResult = this.peso / (this.altura ** 2);
            return imcResult.toFixed(2);
        }
    };
}

const p1 = createPerson('Benito', 'Camelo', 71, 1.87);
console.log(p1.fala('macacos com cancer de pele'), p1.imc);
p1.fullName = "Lucie Pompiere Thales"
console.log(p1.fullName)