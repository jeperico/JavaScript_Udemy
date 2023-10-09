const array= ["Luiz", "Maria", "João", "Pablo", "Danrley", "Sobral", "Guilherme"]
console.log(array[0] = "Eduardo"); // troca ‘Luiz’ por ‘Eduardo’
console.log(array[3] = "Luiza"); // adiciona o valor ‘Luiza
console.log(array.push()); // adiciona um elemento no final do Array
console.log(array.unshift()); // adiciona um elemento no começo do Array
console.log(array.pop()); // remove o último elemento do Array
//const removido = array.pop() // Guarda o elemento removido em uma constante
console.log(array.shift()); // remove do começo
console.log(delete array[1]); // deleta o valor do 1 sem mexer nos outros índices /* undefined */
console.log(array.sort ()); // ordena os números em ordem crescente
console.log(array.slice(0, 3)); // fatia igual string
console.log(array instanceof Array); // retorna se é um Array ou não