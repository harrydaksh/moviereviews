import React, {createContext, useState} from 'react';
import B from "./B";
let countContext = createContext()
const A = () => {
    let [count,setCount] =useState(0)
    return (
        <countContext.Provider value={{count,setCount}}>
            <B/>
            <h1>{count}</h1>
        </countContext.Provider>
    );
};

export default A;
export {countContext}