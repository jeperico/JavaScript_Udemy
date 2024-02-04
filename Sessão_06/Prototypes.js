function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;
};
Person.prototype.fullName = () => this.name + ' ' +  this.lastname;

const p1 = new Person('Luiz', 'Otavio');
const p2 = new Person('Jorge', 'Jorginho');

console.dir(p1);
console.dir(p2);