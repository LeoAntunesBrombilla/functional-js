const curryFunction = (a) => (b) => (c) => a + b + c;

curryFunction(1)(2)(3)

function curried2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

curried2(1)(2)(3)