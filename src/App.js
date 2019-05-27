import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import List from './container/ListContainer';
import Detail from './container/DetailContainer';
import NotFound from './components/notfound/NotFound';
import Login from './container/LoginContainer';
import PropTypes from 'prop-types';

// import * as authentication from './services/authentication';
import PrivateRoute from './components/router/PrivateRoute';
import RouteWithProps from './components/router/RouteWithProps';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

const App=()=> {
  
  
    return (
      <Router>
          <Switch>
              <RouteWithProps exact path="/login" component={Login}  />
              
              <PrivateRoute exact path="/" component={List}  />
              <PrivateRoute exact path="/currency/:id" component={Detail}  />
              <PrivateRoute exact path="/list" component={List}  />
              <PrivateRoute component={NotFound}  />
            
          </Switch>
      </Router>
    );
  
}


export default App;