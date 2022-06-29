import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [process, setProcess] = useState("running")

    return (
        <>
            <div className="counter">
                <button
                    onClick={
                        () => {
                            setCounter(counter + 1)
                        }
                    }
                    type="button"
                    className="btn btn-success"
                >+
                </button>
                <h1>{counter}</h1>
                <button
                    onClick={
                        () => {
                            setCounter(counter - 1)
                        }}
                    type="button" className="btn btn-danger">-
                </button>
            </div>
            <div className="counter">
                <h1>{process}</h1>
                <button type="button" className="btn btn-danger"
                        onClick={() => {
                            setProcess("stop")
                        }}
                >
                    stop
                </button>
            </div>


        </>
    );
};

export default Counter;