const product = { name: "Mug", price: 1.8 }; // Mug is "Caneca"
const otherProduct = { ...product };
// const otherProduct = Object.assign({}, product);
// const otherProduct = { name: product.name, price: product.price};
otherProduct.name = 'Cup';
otherProduct.price = 2.5;
Object.freeze(otherProduct);

console.log(product);
console.log(otherProduct);
(Object.keys(product)).forEach(value => console.log(value));

// for(let entry of Object.entries(product)) {
for(let [chave, valor] of Object.entries(product)) {
    console.log(`${chave}: ${valor}.`);
};