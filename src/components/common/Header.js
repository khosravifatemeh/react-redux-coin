import React,{useState} from 'react';
import { Link,withRouter } from 'react-router-dom';
import Search from '../../container/SearchContainer';
import * as authentication from '../../services/authentication';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import {
  Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import '../../assets/css/Header.css';
const Header=({history})=>{
const [flag,setFlag]=useState({isOpen:false,dropdownOpen:false})
    
 const toggle=()=> {
  setFlag({...flag,isOpen:!flag.isOpen})
 
  }
 const dropdownToggle=()=> {
    
    setFlag({...flag,dropdownOpen:!flag.dropdownOpen})
  }
  const logout=()=>{
    authentication.logout();
    history.push('/')
  }
 
  return (
    <div className="Header">
      <Navbar expand="lg" className="navbar-absolute fixed-top">
        <Container fluid>
          <NavbarBrand href="/">
            <Link to="/">
              <img src={logo} alt="logo" className="Header-logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </NavbarToggler>
          <Collapse navbar isOpen={flag.isOpen}>

            <Nav navbar>
              <NavItem>
                <Link to="" onClick={()=>history.push("/")} className="nav-link">
                  Home
              </Link>
              </NavItem>
            
              <Dropdown
                nav
                isOpen={flag.dropdownOpen}
                toggle={dropdownToggle}
              >
                <DropdownToggle caret nav>
                  <i className="fa fa-user" />
                  <p>
                    <span className="d-lg-none d-md-block">Pricing</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" onClick={()=>logout()}>Log out</DropdownItem>

                </DropdownMenu>
              </Dropdown>

            </Nav>
            <span className="d-flex col nopadding justify-content-end"><Search /></span>

          </Collapse>

        </Container>


      </Navbar>
    </div>
  );
};

Header.PropTypes={
  history: PropTypes.object.isRequired
}

export default withRouter(Header);
