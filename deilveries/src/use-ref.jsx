import { useState, useEffect, useRef} from "react";

function RenderCount(){
    
    const renderCount = useRef(0);
    const [value, setValue] = useState("");

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
      });
    

    return(
        <div>
        <h2>useRef hook example</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <h4>Render Count: {renderCount.current}</h4>
    </div>  
    );
}

export default RenderCount;