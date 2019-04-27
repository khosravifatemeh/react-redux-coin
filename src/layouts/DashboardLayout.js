import React, { Component } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

class DashboardLayout extends Component {
    constructor(){
        super()
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle('perfect-scrollbar-on');
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel" ref="mainPanel">
                    <Header logout={this.logout} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DashboardLayout;