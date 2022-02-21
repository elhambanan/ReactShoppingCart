import { useReducer} from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case "addOne":
            return state+1;
        case "addFive" :   
            return state+5
        case "decrement":
            return state-1;
        default: 
            return state;        
    }
}

const CounterOne = () => {

    //  useState & useReducer =>for state managment
    //  useReducer steps :

    // 1. import useReducer();
    // 2. useReducer(reducer, initialState);
    // 3. return : [count , dispatch] .... dispatch is function
    // 4. reducer(state, action)


    const [count, dispatch] = useReducer(reducer, initialState)

    return ( 
        <div>
            <h2>wellcome to Reducer:</h2>
            <h3>count is : {count}</h3>
            <button onClick={() => dispatch("addOne")}>add +1</button>
            <button onClick={() => dispatch("addFive")}>add +5</button>
            <button onClick={() => dispatch("decrement")}>add -1</button>
        </div>
     );
}
 
export default CounterOne;