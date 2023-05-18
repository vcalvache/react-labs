import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {
        number: state.number + 1
      };
    }
    case 'decrement': {
        return {
            number: state.number - 1
          };
    }
  }
}

const initialState = { number: 0 };

function Clicker() {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleIncrement() {
        dispatch({ type: 'increment' });
    }
    
    function handleDecrement() {
        dispatch({ type: 'decrement' }); 
    }

  return (
    <>
    <h2>useReducer hook example</h2>
        <p></p>
      <p>Number: {state.number}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        decrement
      </button>
      
    </>
  );
}

export default Clicker;