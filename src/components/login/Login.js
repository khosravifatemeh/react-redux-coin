import React, { Component } from 'react';
import { Redirect } from 'react-router'
import LoginForm from './LoginForm';
class Login extends Component {
    state = { redirectToReferrer: this.props.loggedIn }
    loginToApi = (email, password) => {
        return this.props.login(email, password)
            .then(() => { this.setState({ redirectToReferrer: true }) })
    }
    render() {
        const from = this.props.location.state || '/'
        const { redirectToReferrer } = this.state
        return (
            <div>
                {redirectToReferrer &&
                    // (<Redirect to={from || '/list'} />)
                    (<Redirect to='/list' />)
                }
                <LoginForm login={this.loginToApi} />
            </div>
        );
    }
}

export default Login;