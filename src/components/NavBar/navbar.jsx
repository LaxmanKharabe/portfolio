import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const FixedNavbar = (props) => {
  const [isChecked, setChecked] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  function SwitchThem() {
    setChecked((prevChecked) => !prevChecked);
    props.setThemes(isChecked ? 'white-theme' : 'dark-theme');
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top justify-content-center scroll-navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="container gap-4">
        <a className="navbar-brand bg-primary text-white brandName" href="#home">L</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
            <Link to="projects" className="nav-link"><a href="#">Projects</a></Link>
            </li>
            <li className="nav-item">
            <Link to="about" className="nav-link"><a href="#">About</a></Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link"><a href="#">Contact</a></Link>
            </li>
          </ul>
        </div>
        <label className='switch'>
          <input type="checkbox" onChange={SwitchThem}/>
          <span className='slider'></span>
        </label>
      </div>
    </nav>
  );
};

export default FixedNavbar;
