// once.test.ts
const {once, onceAndAfter} = require('./index')
describe("once", () => {
    it("without 'once', a function always runs", () => {
        const myFn = jest.fn();
        myFn();
        myFn();
        myFn();
        expect(myFn).toHaveBeenCalledTimes(3);
    });
    it("with 'once', a function runs one time", () => {
        const myFn = jest.fn();
        const onceFn = jest.fn(once(myFn));
        onceFn();
        onceFn();
        onceFn();
        expect(onceFn).toHaveBeenCalledTimes(3);
        expect(myFn).toHaveBeenCalledTimes(1);
    });
});

describe("onceAndAfter", () => {
    it("calls the 1st function once & the 2nd after", () => {
        const func1 = jest.fn();
        const func2 = jest.fn();
        const testFn = jest.fn(onceAndAfter(func1, func2));
        testFn();
        testFn();
        testFn();
        testFn();
        expect(testFn).toHaveBeenCalledTimes(4);
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(3);
    });
});