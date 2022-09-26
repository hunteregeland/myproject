import {useState} from "react";

function FunctionalCounter() {
    // create state variable
    // initialize state in 'useState()'
    const [counter, setCounter] = useState(0); // useState creates state 'counter' and function 'setCounter()' to set it

    const increment = ()=>{
        setCounter(counter + 1);
    }

    const decrement = ()=>{
        setCounter(counter - 1);
    }

    return (
        <div>
            <div>Counter value: {counter}</div>
            <div><button onClick={increment}>Increment</button></div>
            <div><button onClick={decrement}>Decrement</button></div>
        </div>
    );
}

export default FunctionalCounter;