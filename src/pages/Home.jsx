import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>📚 Study Material Portal</h1>
      <p style={{ textAlign: 'center' }}>Select your department:</p>
      <div className="departments">
        <Link to="/CSE" className="button">CSE</Link>
        <Link to="/ECE" className="button">ECE</Link>
      </div>
    </div>
  );
}