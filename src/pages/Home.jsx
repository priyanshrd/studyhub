// === src/pages/Home.jsx ===
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="logo-circle">
        <img src="/logo.png" alt="Gecko Logo" className="logo-img" />
      </div>
      <h1 className="title">StudyHub</h1>
      <p className="subtitle">Select your department to begin:</p>

      <div className="button-group">
        <Link to="/CSE" className="nav-button">Computer Science and Engineering</Link>
        <Link to="/ECE" className="nav-button">Electronics & Communications</Link>
        <Link to="/Institutional" className="nav-button">Institutional Electives</Link>
      </div>
    </div>
  );
}
