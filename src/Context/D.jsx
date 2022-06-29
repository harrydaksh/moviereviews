import React,{useContext} from 'react';
import {countContext} from "./A";
const D = () => {
    let value = useContext(countContext)
    console.log(value)
    return (
        <div>
            <h1>context Api</h1>

          <h1>  {value.count}</h1>
            <button onClick={()=>value.setCount(value.count+1)}>+</button>
        </div>
    );
};

export default D;