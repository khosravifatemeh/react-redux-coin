import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import NotFound from './components/notfound/NotFound';
import Login from './components/login/Login';
import * as authentication from './services/authentication'
import PrivateRoute from './components/router/PrivateRoute'
import RouteWithProps from './components/router/RouteWithProps'
import PropTypes from 'prop-types'
import './index.css';

class App extends React.Component {
  constructor() {
    super()

    let authState = authentication.getAuthState()
    console.log(authState)
    this.state = {
      auth: {
        loggedIn: authState.userToken !== null,
        userToken: authState.userToken,
      }
    }
    console.log(this.state)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  getChildContext () {
    return {
      auth: {
        loggedIn: this.state.auth.loggedIn,
        userToken: this.state.auth.userToken,
      
      }
    }
  }
  login(username, password) {
    return authentication.login(username, password)
      .then(result => {
        this.setState({
          auth: {
            ...this.state.auth,
            loggedIn: true,
            userToken: result.userToken,
          }
        })
      })
      .catch(err => {
        this._logout()
        return Promise.reject(err)
      })
  }

  logout() {
    return authentication.logout().then(result => {
      this._logout()
    })
  }
  _logout() {
    this.setState({
      auth: {
        ...this.state.auth,
        loggedIn: false,
        userToken: null
      }
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <RouteWithProps exact path="/login" component={Login} props={{login:this.login}} />
            <PrivateRoute exact path="/" component={List} />
            <PrivateRoute exact path="/currency/:id" component={Detail} />
            <PrivateRoute exact path="/list" component={List} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
App.childContextTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool,
    userToken: PropTypes.string
  })
}
export default App;


ReactDOM.render(<App />, document.getElementById('root'));
