const {performAction, performAction2, performActionTable} = require('./switchToFunctionExercise')

describe('performAction - using switch', () => {
    it('should increment the count', () => {
        const state = {count: 5};
        const action = {type: 'INCREMENT'};
        expect(performAction(state, action)).toEqual({count: 6});
    });

    it('should decrement the count', () => {
        const state = {count: 5};
        const action = {type: 'DECREMENT'};
        expect(performAction(state, action)).toEqual({count: 4});
    });

    it('should reset the count', () => {
        const state = {count: 5};
        const action = {type: 'RESET'};
        expect(performAction(state, action)).toEqual({count: 0});
    });

    it('should return the current state for unknown action types', () => {
        const state = {count: 5};
        const action = {type: 'UNKNOWN'};
        expect(performAction(state, action)).toEqual(state);
    });
});

describe('perform action using function', () => {
    it('should increment the count', () => {
        const state = {count: 5};
        const action = {type: 'INCREMENT'};
        expect(performAction2(state, action)).toEqual({count: 6});
    });
    it('should decrement the count', () => {
        const state = {count: 5};
        const action = {type: 'DECREMENT'};
        expect(performAction2(state, action)).toEqual({count: 4});
    });

    it('should reset the count', () => {
        const state = {count: 5};
        const action = {type: 'RESET'};
        expect(performAction2(state, action)).toEqual({count: 0});
    });

    it('should return the current state for unknown action types', () => {
        const state = {count: 5};
        const action = {type: 'UNKNOWN'};
        expect(performAction2(state, action)).toEqual(state);
    });
})

describe('testing individual actionTableFunctions', () => {
    it('should increment the state', () => {
        const state = {count: 4};
        const action = undefined
        expect(performActionTable.INCREMENT(state, action)).toEqual({count: 5})
    })
})