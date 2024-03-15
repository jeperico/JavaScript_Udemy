const speak = {
    speak() {
        console.log('test')
    }
}

const PeoplePrototype = { ...speak }

function criaPessoa() {
    Pessoa.prototype = PeoplePrototype;
}

class People {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}
People.prototype = PeoplePrototype

const p1 = new People('Josias', 'Costa', 34);
const p2 = new Pessoa();
console.log(p1);
console.log(p2);