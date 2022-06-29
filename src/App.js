import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const showalert = () => { alert("sometext") }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => showalert()}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
