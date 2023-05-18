import { useState } from "react";

function ChooseColor(){
    const [color, setColor] = useState("");

    return (
        <div>
            <h2>useState hook example</h2>
            <p>
            <h4>My favorite color is {color}</h4>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("green")}>Green</button>
            </p>
        </div>     
    )
}

export default ChooseColor;