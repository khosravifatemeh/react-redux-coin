import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../../assets/images/logo.png';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem,  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import '../../assets/css/Header.css';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {

    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
render(){
  return (
    <div className="Header">
      <Navbar expand="lg" 
       className="navbar-absolute fixed-top">
        <Container fluid>
          <NavbarBrand href="/">
            <Link to="/">
              <img src={logo} alt="logo" className="Header-logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </NavbarToggler>
          <Collapse navbar isOpen={this.state.isOpen}>

            <Nav navbar>
              <NavItem>
                <Link to="" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="" className="nav-link">
                  Features
                </Link>
              </NavItem>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="fa fa-user" />
                  <p>
                  <span className="d-lg-none d-md-block">Pricing</span>
                                    </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" onClick={this.props.logout}>Log out</DropdownItem>
              
                </DropdownMenu>
              </Dropdown>
  
            </Nav>
          <span className="d-flex col nopadding justify-content-end"><Search /></span>

          </Collapse>

        </Container>
 

    </Navbar>
  </div>
    );
}
}
  


export default Header;
