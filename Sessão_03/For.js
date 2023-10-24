const frutas = ["Melão", "Pera", "Banana", "Uva"]; // Vetor (1 linha);
const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
}


for(i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for (i in frutas) {
    console.log(i, frutas[i]);
    // Retorna em i sendo o index do elemento iteravel
}

for (i in pessoa) {
    console.log(i, pessoa[i]);
    // Retorna em i sendo a chave do elemento
}

for(i of frutas){
    console.log(i);
    // Retorna o valor literal de cada index, para iteraveis
}