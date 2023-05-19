
import './App.css';
import ChooseColor from './use-state';
import Clicker from './use-reducer';
import RenderCount from './use-ref';
import Rocket from './use-effect';
import React from 'react';

const NameContext = React.createContext();

function App() {

  return (
    < div align ="center">
    <ChooseColor />
    <Clicker />
    <RenderCount />
    <Rocket />
    <NameContext.Provider value={"Víctor"}>
      <MyNameIs />
    </NameContext.Provider>
    </div>
  );
}


function MyNameIs(){
  return (
    <NameContext.Consumer>
      {value => <p>Hi! my name is {value} and i'm a programmer!</p>}
    </NameContext.Consumer>
  );
}

export default App;
