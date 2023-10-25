// try{
//     console.log(naoExiste)
// } catch(err) {
//     console.log("naoExiste não existe")
//     console.log(err)
// }

function soma(x, y){
    if(typeof x !== "number" || typeof y !== "number") {
        // throw('x e y precisam ser números');
        throw new ReferenceError('x e y precisam ser números');
    }
    return x+y;
}

try{
    console.log(soma(2, 12));
    console.log(soma("a", 12));
} catch(error){
    // console.log(error);
    console.log("Algo mais amigavel para o user")
} finally {
    console.log("finnaly sempre é executado")
}