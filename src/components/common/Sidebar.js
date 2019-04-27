import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="blue">
                <div className="logo">
                    <a className="simple-text logo-mini">
                        <img src={logo} alt="logo-react" />
                    </a>
                    <a className="simple-text">
                        Creative Team
                    </a>
                </div>
                <div className="sidebar-wrapper ps">
                    <Nav>
                        <li className="active">
                            <NavLink to="" className="nav-link" activeClassName="active">
                                <i></i>
                                <p className="text-center">Home</p>
                            </NavLink>
                         
                        </li>
                        <li>
                        <NavLink to="" className="nav-link" activeClassName="active">
                                <i></i>
                                <p className="text-center">Coins</p>
                            </NavLink>
                        </li>

                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;