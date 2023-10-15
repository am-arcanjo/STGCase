import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="Home-header">
        <Link to="/lobby">
        <p className="button"> get started </p>
        </Link>
      </div>
  );
}

export default Home;