import { useCount, useCountAction } from "./CounterProvider";
// import { CounterContext, CounterContextDispacher } from "./CounterProvider";

const CounterOne = () => {
    // const count = useContext(CounterContext); //state
    // const setCount = useContext(CounterContextDispacher); //setState
    
    const count = useCount();
    const {addOne, addFive, decrement} = useCountAction();

    // const addOne = (prevCount) => {setCount(prevCount+1) }
    // const addFive = (prevCount) => {setCount(prevCount+5)}
    return ( 
        <div>
            <h3>count is: {count}</h3>
            <button onClick={addOne}>add One</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={decrement}>decrement</button>

        </div>
     );
}
 
export default CounterOne;