import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCout = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }

}

const set = ({ count } = {}) => {
    return {
        type: 'SET',
        count
    }
}

const reset = () => {
    return {
        type: 'RESET',
    }
}

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };

        case 'DECREMENT':
            return { count: state.count - action.decrementBy };

        case 'RESET':
            return { count: 0 };

        case 'SET':
            return { count: action.count }

        default:
            return state;
    }

}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 10 }))

store.dispatch(decrementCout({ decrementBy: 5 }));

store.dispatch(set({ count: 100 }))

store.dispatch(reset())


