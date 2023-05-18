
import './App.css';
import ChooseColor from './use-state';
import Clicker from './use-reducer';
import RenderCount from './use-ref';
import Rocket from './use-effect';

function App() {
  return (
    < div align ="center">
    <ChooseColor />
    <Clicker />
    <RenderCount />
    <Rocket />
    </div>
  );
}

export default App;