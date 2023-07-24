const once = (fn) => {
    // vou mandar minha funcao pra ca
    // ela vai ser criada com o done false
    let done = false;
    // aqui vai retornar uma funcao anonima
    return (...args) => {
        // se done for true nao vai entrar aqui
        // e vai retornar undefined
        if (!done) {
            // se entrar vai passar o done pra true
            done = true;
            // e retornar a funcao que foi passada como argumento
            return fn(...args);
        }
    };
};
//
// const squeak = (a) => console.log(a, "squeaaaak")
// // squeak("original")
// // squeak("original")
// // squeak("original")
//
// // passo a funcao como argumento para once
// // squeakOnce vai ser squeak com o done como closure
// const squeakOnce = once(squeak)
// // na primeira execucao ele cria o done como false
// // passa o done pra true
// // e retona fn(...args)
// // estou executando a funcao anonima que once(squeak) retornou
// squeakOnce("Original")
// // na segunda ele ve que o done ta true e retorna undefined
// // e n faz nada pq temos undefined
// squeakOnce("Original")

// const closureExample = (fn) => {
//     let again = false
//     return (...args) => {
//         if(!again) {
//             again = true
//             return fn(...args)
//         }
//     }
// }

// create a default gn
// understand the args are the same for both? can they have dif args?
const onceAndAfter = (fn, gn) => {
    let done = false
    return (...args) => {
        if(!done) {
            done = true
            return fn(...args)
        } else {
            return gn(...args)
        }
    }
}

const squeak = (x) => console.log(x, "squeak!!");
const creak = (x) => console.log(x, "creak!!");
const makeSound = onceAndAfter(squeak, creak);
makeSound("door"); // "door squeak!!"
makeSound("door"); // "door creak!!"
makeSound("door"); // "door creak!!"
makeSound("door"); // "door creak!!"

// const myExample = a => console.log(a)
// const example = closureExample(myExample)
//
// example("Chama no brelele")
// example("sioadjasiojdasoiji")


module.exports = {once, onceAndAfter}