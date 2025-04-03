import useCountStore from "./CreateZustand";
import { useState } from "react";

function UseZustand() {
    const { count, increment, decrement, reset, name, setName } = useCountStore();
    const [inputName, setInputName] = useState("");

    const handleNameChange = () => {
        setName(inputName);
        setInputName(""); // Clear input after setting name
    };

    return ( 
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h1>Name: {name}</h1>
            <input 
                type="text" 
                value={inputName} 
                onChange={(e) => setInputName(e.target.value)} 
                placeholder="Enter name" 
            />
            <button onClick={handleNameChange}>Set Name</button>
        </>
    );
}

export default UseZustand;
