const teste = [2, 3, 4, 5]

teste.xablau = 'nem sei'

console.log(teste)
console.log(teste.length)

// Inserindo elemento na primeira posiçãposier o
Array.prototype.insertFirstPosition = function (value) {
    //loop que pega do ultimo pro primeiro
    for (let i = this.length; i >= 0; i--) {
        // numbers[5] = numbers[4]
        // [1,2,3,4,5,5] - 5
        // [1,2,3,4,4,5] - 4
        // [1,2,3,3,4,5] - 3
        // [1,2,2,3,4,5] - 2
        // [1,1,2,3,4,5] - 1
        // [0,1,2,3,4,5] - 0
        this[i] = this[i - 1]
    }
    //[value,1,2,3,4,5]
    this[0] = value
}

const numbers = [1, 2, 3, 4, 5]
numbers.insertFirstPosition(0)


// Array bidimensional

let arrayBidimensional = []

arrayBidimensional[0] = []
arrayBidimensional[0][0] = 0
arrayBidimensional[0][1] = 7
arrayBidimensional[0][2] = 4
arrayBidimensional[0][3] = 5
arrayBidimensional[1] = []
arrayBidimensional[1][0] = 2
arrayBidimensional[1][1] = 5
arrayBidimensional[1][2] = 1
arrayBidimensional[1][3] = 4

let arrayBy2 = new Array(2);
for (let i = 0; i < arrayBy2.length; i++) {
    arrayBy2[i] = new Array(4);
}


for(let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional[i].length; j++) { // fazer o for na array da linha
        console.log(`Elemento ${i} ${j} =====> ${arrayBidimensional[i][j]}`);
    }
}

