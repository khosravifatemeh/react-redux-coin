import React, { Component } from 'react';
import Loading from '../common/Loading';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
const Login = ({ loggedIn,error, login,loading }) => {
  const  a=(email,password)=>{
        login(email,password);
    }
    if (loading) {
        return <div className="loading-container"><Loading /></div>
      }
      if (error) {
        return <div className="error">{error}</div>
      }
return(
    <div>
        {loggedIn &&
            // (<Redirect to={from || '/list'} />)
            (<Redirect to='/list' />)
        }
      
        <LoginForm s={a} />
    </div>
)
    
 
};

// class Login extends Component {
//     // state={
//     //     error:''
//     // }
//     // state = { redirectToReferrer: this.props.loggedIn }
//     loginToApi = (email, password) => {
//         this.props.login(email, password)
//         // .catch(error=>{
//         //     this.setState({
//         //         error
//         //     });
//         // })
//             // .then(() => { this.setState({ redirectToReferrer: true }) })
//     }
//     render() {
//         console.log(this.props.loggedIn);
//         // const from = this.props.location.state || '/'
//         const  redirectToReferrer  = this.props.loggedIn 
//         return (
//             <div>
//                 {redirectToReferrer &&
//                     // (<Redirect to={from || '/list'} />)
//                     (<Redirect to='/list' />)
//                 }
//                 <LoginForm login={this.loginToApi} />
//             </div>
//         );
//     }
// }
Login.PropTypes = {
    loggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}
export default Login;