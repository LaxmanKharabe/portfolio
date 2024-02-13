import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const FixedNavbar = (props) => {
  const [isChecked, setChecked] = useState(false);

  function SwitchThem() {
    setChecked((prevChecked) => !prevChecked);
    props.setThemes(isChecked ? 'white-theme' : 'dark-theme');
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top justify-content-center">
      <div className="container gap-4">
        <a className="navbar-brand bg-primary text-white brandName" href="#home">L</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className={`nav-link`} >
                <Link to="projects" className="usetAll">Projects</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="about" className="usetAll">About</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="contact" className="usetAll">Contact</Link></a>
            </li>
          </ul>
        </div>
        <label className='switch'>
          <input type="checkbox" onClick={SwitchThem} checked={isChecked}/>
          <span className='slider'></span>
        </label>
      </div>
    </nav>
  );
};

export default FixedNavbar;
