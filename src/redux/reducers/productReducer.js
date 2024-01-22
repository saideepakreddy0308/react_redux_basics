// Reducers always take initial state and action as parameters and return a new state.
// We created this file to hold all the action types, and after productActions.js and action-types.js, we will create productReducer.js file.

const initialState = {
    products: [{
        id: 1,
        title: "Deepak",
        category: "Programmer",
    }],
};

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}

// now, we have created our first reducer, lets create our store and firstly, index.js