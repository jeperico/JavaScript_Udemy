const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a1.forEach((valor, indice, array) => {
    console.log(valor, indice);
});

// Pode funcionar como Redduce, map, fillter, só não é indicado.
// Pode ser utilizado com let