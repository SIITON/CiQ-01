import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  function clickedMyButton() {
    setCounter(counter + 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://media-eu.jobylon.com/companies/company-logo/forefront-consulting-group/ffcg.ae80f146.png"} className="App-logo" alt="logo" />
        <p>
          <button onClick={clickedMyButton}>Click me</button>
        </p>
        <p>
          Times clicked: <div>{counter}</div>
        </p>
      </header>
    </div>
  );
}

export default App;
