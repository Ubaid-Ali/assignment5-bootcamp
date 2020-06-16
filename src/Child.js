import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = () => {
    let childCount = useContext(CounterContext);
    return (
        
        <div>
            <h3>Increament and Decreament with Contex <br /> {childCount[0]}</h3>
            <button onClick={() => { childCount[1](++childCount[0]) }}  >Increase</button>
            <button onClick={() => { childCount[1](--childCount[0]) }}  >Decrease</button>
        </div>
    )
}

export default Child;