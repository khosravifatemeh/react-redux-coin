import { connect } from 'react-redux';
import Login from '../components/login/Login'
import * as userActions from '../actions/userActions';

const mapStateToProps = state => ({
    error:state.login.error,
    loggedIn: state.login.loggedIn,
    loading:state.login.loading
});
const mapDispatchToProps = dispatch => ({
    
        login: (email,password) => {
            dispatch(userActions.login(email,password))
        
    }
});
const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
  
  export default LoginContainer
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Login)
