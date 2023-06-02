import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header id="header">
      <div class="header-content">
        <h2 id="site-name">
          <a href="/">WeBuild </a>
        </h2>
        <Nav />
      </div>
      <button onClick={toggleMenu}>
        <i class="fa-solid fa-bars" id="menu-toggle"></i>
      </button>

      {openMenu ? (
        <nav className="phoneNav">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#projects">Careers</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default App;
