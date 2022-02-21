import React, { useContext, useState } from "react";

const CounterContext = React.createContext(); //state
const CounterContextDispacher = React.createContext(); //setState

const CounterProvider = ({children}) => {
    const [count, setCount]= useState(45)
    return ( 
        <CounterContext.Provider value={count}>
            <CounterContextDispacher.Provider value={setCount}>
                 {children}
            </CounterContextDispacher.Provider>
        </CounterContext.Provider>
     );
}
 
export default CounterProvider;

// custom Hook for context:
export const useCount = () => useContext(CounterContext);

export const useCountAction = () => { 
    const setCount = useContext(CounterContextDispacher);
    const addOne = () =>{
        setCount((prevCount) => prevCount + 1)
    } 
    const addFive = () => {
        setCount((prevCount) => prevCount + 5)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return {addOne, addFive, decrement}
}