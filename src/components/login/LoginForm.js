import React, { Component } from 'react';
import propTypes from 'prop-types'
import cardheader from './square1.png';
import './Login.css';

class LoginForm extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //       loginFailed: false,
    //       fields: {
    //         email: '',
    //         password: ''
    //       }
    //     }
    //     this.onInputChange = this.onInputChange.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //   }
    state = {
        loginFailed: false,
        fields: {
          email: '',
          password: ''
        }
      }
      handleSubmit = event=> {
        event.preventDefault();
        this.props.login(this.state.fields.email, this.state.fields.password)
            .catch(err => {
                console.log(err)
                this.loginFailed()
            })
    }
    loginFailed() {
        this.setState({
            loginFailed: true,
            fields: {
                email: '',
                password: ''
            }
        })
    }
    onInputChange= event => {
        const fields = this.state.fields
        fields[event.target.name] = event.target.value
        this.setState({ fields })
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-5 offset-lg-0 offset-md-3">
                                <div className="card card-login">
                                    <div className="card-header">
                                        <img className="card-img" src={cardheader} />
                                        <h4 className="card-title">Login</h4>
                                    </div>
                                    <div className="card-body">
                                        <form className="Login-Form" onSubmit={this.handleSubmit}>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i></i></span>

                                                </div>
                                                <input className="form-control" onChange={this.onInputChange} placeholder="Enter Username" value={this.state.fields.email} name="email" type="text" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i></i></span>

                                                </div>
                                                <input className="form-control" onChange={this.onInputChange} placeholder="Enter Password" value={this.state.fields.password} name="password" type="password" />
                                            </div>
                                            <div className="Form-Footer">
                                                <input type="submit" className="btn btn-info btn-round btn-lg" value="Login" />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
LoginForm.propTypes = {
    login: propTypes.func.isRequired
}
export default LoginForm;