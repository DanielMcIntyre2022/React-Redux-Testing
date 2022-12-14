import { createStore } from 'redux';

const reducerFunction = (state = {counter: 0}, action) => {

    // Synchronos Function //
    // We should not mutate the original state //
    if(action.type === 'increment') {
        return { counter:state.counter+1}
    };

    if(action.type === 'decrement') {
        return { counter:state.counter-1}
    };

    if(action.type === 'add') {
        return { counter:state.counter + action.payload}
    };

    return state;
};

const store = createStore(reducerFunction)

export default store;