const initialState = {}
const emptyAction = {type: "Empty"};

function doAction(
    state = initialState,
    action = emptyAction
) {
    const newState = {};
    switch (action.type) {
        case "Create":
            // update state, generate newState,
            // depending on action data
            // to create a new item
            return newState;
        case "Update":
            // update state, generate newState,
            // depending on action data
            // to update an existing item
            return newState;
        case "Delete":
            // update state, generate newState,
            // depending on action data
            // to delete an existing item
            return newState;
        default:
            return state;
    }
}

// taking advantage of storing functions
// that means you can assign then to variables
// and use them as values

const dispatchTable = {
    CREATE: (state, action) => {
        // update state, generate newState,
        // depending on action data
        // to create a new item
        const NewState = {
            /* updated state */
        };
        return NewState;
    },
    UPDATE: (state, action) => {
        // update state, generate newState,
        // depending on action data
        // to update an existing item
        const NewState = {
            /* updated state */
        }
        return NewState;
    },
    DELETE: (state, action) => {
        // update state, generate newState,
        // depending on action data
        // to delete an existing item
        const NewState = {
            /* updated state */
        }
        return NewState;
    }
};

function doAction2(state, action) {
    return dispatchTable[action.type] ? dispatchTable[action.type](state, action) : state;
}

// - **Modularity**: Encapsulates logic in separate functions.
// - **Readability**: Improves code clarity by reducing complexity.
// - **Reusability**: Facilitates code reuse and composition.
// - **Flexibility**: Easier to modify or extend individual actions.
// - **Conciseness**: Automates mapping between action types and functions.
// - **Testability**: Enhances the ability to write unit tests for individual functions.
