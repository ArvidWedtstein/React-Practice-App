
import './App.css';
import Garage from './components/Garage';

const element = (
    <div>
        <Garage />
    </div>
)
function App() {
  return (
    <div className="App">
      <h1>Well, hello there</h1>
      <p>{element}</p>
    </div>
  );
}

export default App;
