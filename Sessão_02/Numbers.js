// IEEE 754-2008

num = 1500
console.log(num.toString()); // retorna “1500”
console.log(num.toString(2)); /* Transforma em binário */ // retorna “10111011100”
console.log(num = num.toString()); // typeof num = String
num1 = 123.312312312312312
console.log(num1.toFixed(2)); // retorna 123.31
console.log(Number.isInteger(num1)); // retorna false
num2 = 438 * "5"
console.log(Number.isNaN(num2)); // retorna false
num3 = 0.7;
num4 = 0.1;
num3e4 = num3 + num4;
num5 = 0.9999999999
console.log(Number.isInteger(num5)); // retorna false
console.log(num5 = parseFloat(num5.toFixed(2))); // retorna 1