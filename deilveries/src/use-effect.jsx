import { useState, useEffect } from "react";

function Rocket(){
    const [count, setCount] = useState(5);
    const [engine, setEngine] = useState("");

    useEffect(() => {
        setTimeout( () => {
            setCount(() => count - 1);
            if (count == 0){
               setCount(0);
               setEngine("Ignition!");
           
            }
        }, 1000);
      });


    return (
        <>
        <h2>useEffect hook example</h2>
        <p>{count}</p>
        <p >{engine}</p>
      </>
    );
}

export default Rocket;