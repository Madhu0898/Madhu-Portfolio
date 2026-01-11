// src/components/Header.js
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">Madhu Muddala</div>
        <ul className="nav-links">
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
