import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import FixedNavbar from './components/NavBar/navbar';
import { useState } from 'react';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';

function App() {
  const [theme, setTheme] = useState('white-theme');
  const [links, setLinks] = useState([]);

  return (
    <BrowserRouter>
      <div className={`container-fluid app ${theme}`}>
        <FixedNavbar setThemes={setTheme} setLinks={setLinks} />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
