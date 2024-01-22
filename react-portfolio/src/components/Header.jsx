const Header = ({ activeSection, onNavClick }) => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="name">
          <h1>Elliott Gibson-Creech</h1>
        </div>
        <nav className="nav-items">
          <ul>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => onNavClick('about')}>
                About Me
              </a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={() => onNavClick('projects')}>
                Projects
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => onNavClick('contact')}>
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