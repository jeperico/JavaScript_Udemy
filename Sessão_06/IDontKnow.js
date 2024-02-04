const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    keyB: 'B'
    // __proto__: objA
};

Object.setPrototypeOf(objB, objA);

console.log(objB.keyA);