import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/lobby">
        <p className="button"> Get Started </p>
        </Link>
      </header>
    </div>
  );
}

export default App;
