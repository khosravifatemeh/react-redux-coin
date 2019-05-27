import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { NavLink,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

class Sidebar extends Component {
    render() {
        const { history } = this.props;
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
                            <NavLink to="" onClick={()=>history.push("/")} className="nav-link" activeClassName="active">
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
Sidebar.propTypes = {
    history: PropTypes.object.isRequired,
   
  }
export default withRouter(Sidebar);