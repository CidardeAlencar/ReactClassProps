import logo from './logo.svg';
import './App.css';
import A from './components/container/A';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <A></A>
      </header>
    </div>
  );
}

export default App;
