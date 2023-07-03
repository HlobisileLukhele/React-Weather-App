import './App.css';
import Weather from './Weather.js'
import Form from'./Form.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form />
      <Weather city="Pretoria"/>
      
      </header>
    </div>
  );
}

export default App;
