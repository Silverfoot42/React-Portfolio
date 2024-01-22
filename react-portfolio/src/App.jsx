import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header onNavClick={handleNavClick} activeSection={activeSection} />
      <Content activeSection={activeSection} />
    </div>
  );
}

export default App;