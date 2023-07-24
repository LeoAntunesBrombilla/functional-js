const {fact} = require("./Closures");


describe('Factorial function', () => {
        test('if i put 5 should return 120', () => {
            const expected = 120;
            expect(fact(5)).toEqual(expected)
        })

        test('if negative number, dont start', () => {
            const expected = undefined;
            expect(fact(-2)).toEqual(expected)
        })
    }
)
