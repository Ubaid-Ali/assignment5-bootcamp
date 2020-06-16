import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';



const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 10);

    return (
            <div>
            <h3> Increament and Decreament with Reducer <br /> {state}</h3>
            <button onClick={ () => { dispatch("INCREMENT") } }>Increase</button>
            <button onClick={ () => { dispatch("DECREMENT") } } >Decrease</button>
        </div>
    )
}

export default Child2;