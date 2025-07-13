// === src/components/Header.jsx ===
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-container">
        <img src="/logo.png" alt="Study Gecko Logo" className="site-logo" />
        <span className="site-title">StudyHub</span>
      </Link>
    </header>
  );
}
