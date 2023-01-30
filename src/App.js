import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
      </header>
      <div className='main'>
          <div className='top'>
          <h2>Score: </h2>
          <h2>Best Score: </h2>
          </div>
          <div className='center'>
            <Card/>
          </div>
        </div>
    </div>
  );
}

export default App;
