// // closure.js
// function newCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
//

const newCounter = () => {
    let count = 0;
    return {
        count++;
        return count
    }
}
// let count = 'nem sei'
// console.log(count)
//
// const nc = newCounter();
// console.log(nc)
// console.log(nc()); // 1
// console.log(nc()); // 2
// console.log(nc()); // 3
//
// const nc2 = newCounter()
// console.log(nc2()) // 1
// console.log(nc2()) // 2
// console.log(nc2()) // 3
//
// console.log(nc()) // 4
//
// const makeSaluteClass = (term) =>
//     class {
//         constructor(x) {
//             this.x = x;
//         }
//         salute(y) {
//             console.log(`${this.x} says "${term}" to ${y}`);
//         }
//     };
//
// const Spanish = makeSaluteClass("HOLA");
// new Spanish("ALFA").salute("BETA");
// // ALFA says "HOLA" to BETA
// new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA");
// // GAMMA says "HELLO" to DELTA
// const fullSalute = (c, x, y) => new c(x).salute(y);
// const French = makeSaluteClass("BON JOUR");
// fullSalute(French, "EPSILON", "ZETA");
// EPSILON says "BON JOUR" to ZETA
//
// factorial.js
function fact(n) {
    if (n < 0) return;
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

module.exports = {fact}
// console.log(fact(-2)); // 120

// n, n+1, n+2, n+3, n+4, 5
// function factUpwards(n, i = 1) {
//     // start with 0 then goes to 5
//     if(i > n) {
//         return 1
//     } else {
//         return i * factUpwards(n, i + 1);
//     }
// }
//
// console.log(factUpwards(5))