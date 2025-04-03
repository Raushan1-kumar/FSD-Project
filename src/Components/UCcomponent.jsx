import { useRef } from "react";

function UCcomponent() {
    const inputRef= useRef();
    const show=()=>{
      
    }
    return ( 
        <>
        <input type="text" name="name" ref={inputRef} value={inputRef}/>
        <button></button>
        </>
     );
}

export default UCcomponent;
