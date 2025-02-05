import React from 'react';
import './Navbar.css';
import Portfolio from '../Pages/Portfolio';
import AboutMe from '../Pages/AboutMe';
import Gallery from '../Pages/Gallery';

function Navbar({ setContent }) {

  function ShowPortfolio() {
    setContent(<Portfolio />);
  }

  function ShowAboutMe() {
    setContent(<AboutMe />);
  }

  function ShowGallery() {
    setContent(<Gallery />);
  }
  

  return (
    <div className="navbar-container">
      <button onClick={ShowPortfolio} className="portNavVis">
        Portfolio
      </button>
      <button onClick={ShowAboutMe} className="AboutNavVis">
        About Me
      </button>
      <button onClick={ShowGallery} className="GalleryNavVis">
        Gallery
      </button>
    </div>
  );
}

export default Navbar;
