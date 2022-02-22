import { useCount, useCountAction } from "./CounterProvider";
// import { CounterContext, CounterContextDispacher } from "./CounterProvider";

const CounterOne = () => {
    // const count = useContext(CounterContext); //state
    // const setCount = useContext(CounterContextDispacher); //setState
    
    const count = useCount();
    // const {addOne, addFive, decrement} = useCountAction();
    const dispatch = useCountAction();

    // const addOne = (prevCount) => {setCount(prevCount+1) }
    // const addFive = (prevCount) => {setCount(prevCount+5)}
    return ( 
        <div>
            <h2>wellcome to Context</h2>
            <h3>count is: {count}</h3>
            <button onClick={() => dispatch({type : "addOne", value : 6})}>add One</button>
            <button onClick={() => dispatch({type : "addFive", value : 1})}>add Five</button>
            <button onClick={() => dispatch({type : "decrement", value : 2})}>decrement</button>
        </div>
     );
}
 
export default CounterOne;