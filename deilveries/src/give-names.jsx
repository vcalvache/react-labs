import { Context } from "./use-context";

function GiveNames(){
    const name ="Victor";
    
    return (
        <Context.Provider name={name}>
            
        </Context.Provider>
    );
}