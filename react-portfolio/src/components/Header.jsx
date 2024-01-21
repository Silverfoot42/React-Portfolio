import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <header className="header">
      <div className="navbar">
        <div className="name">
          <h1>Elliott Gibson-Creech</h1>
        </div>
        <nav className="nav-items">
          <ul>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => setActiveSection('about')}>
                About Me
              </a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={() => setActiveSection('projects')}>
                Projects
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => setActiveSection('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;