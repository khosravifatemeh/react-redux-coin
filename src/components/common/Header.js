import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="Header-logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>

          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span className="navbar-text">
              <Search />
            </span>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Header;
