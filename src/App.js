import './App.css';
import Weather from './Weather.js'
import Form from'./Form.js'

function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
      <Form />
      <Weather city="Pretoria"/>
      
      </header>
      </div>
    </div>
  );
}

export default App;
