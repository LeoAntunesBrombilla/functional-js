function performAction(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

const performActionTable = {
    INCREMENT: (state, action) => {
        return {count: state.count + 1};
    },
    DECREMENT: (state, action) => {
        return {count: state.count - 1}
    },
    RESET: (state, action) => {
        return {count: 0}
    },
}

function performAction2(state, action) {
    return performActionTable[action.type] ? performActionTable[action.type](state, action) : state;
}

module.exports = {performAction2, performAction, performActionTable}