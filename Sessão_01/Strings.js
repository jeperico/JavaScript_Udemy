// \ é um caractere de escape em uma string, “\”O céu é o orgasmo eterno da alma\” Hercílio” \\

let String = "Abababada um texto";

console.log(String[7]); // retorna “d”
console.log(String.charAt(7)); // retorna “d”
console.log(String.concat(" Concatena e talz")); // retorna “Abababada um texto Concatena e talz”
console.log(String.indexOf("texto")); // retorna 13
console.log(String.indexOf("TEXTO")); // retorna -1
console.log(String.lastIndexOf("texto")); // procura de trás para frente
console.log(String.match(/[a-z]/g));
console.log(String.search()); /* procura e retorna o índice*/

console.log(String.replace('um', 'outro')); // retorna “Abababada outro texto”
console.log(String.replace('a', '#')); // retorna “Ab#babada um  texto”
console.log(String.replace(/a/g, '#')); // retorna “Ab#b#b#d# um  texto”
console.log(String.slice(2, 6)); // retorna abab
console.log(String.split(' ')); // retorna ['Abababada', 'um', 'texto']
console.log(String.toUpperCase()); // retorna “ABABABADA UM TEXTO”
console.log(String.toLowerCase()); // retorna “abababada um texto”