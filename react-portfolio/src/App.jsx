import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;