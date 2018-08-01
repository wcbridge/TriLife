import React from "react";
import "./NavMenu.js";

const Nav = () => {
  
  function logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
  
  return(

    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="nav_logo" src={require("../../Images/Logo.png")} alt="Logo" />
        </a>
        <div className="navbar-burger burger" data-target="navMenu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <p className="navbar-item">
            TriLife
      </p>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/home">
              Home
        </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="/about">
                About
          </a>
              <a className="navbar-item" href="/addtime">
                Add Time
          </a>
              <a className="navbar-item" href="/calendar">
                Current Time
          </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <p className="navbar-item">
            <a href="/login" onClick={() => logout}> Log Out </a>
          </p>

          <p className="navbar-item"></p>
        </div>

      </div>
    </nav>









  )
};

export default Nav;
