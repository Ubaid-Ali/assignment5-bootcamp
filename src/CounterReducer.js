

const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            console.log("Do nothing");
    }
}

export default CounterReducer;