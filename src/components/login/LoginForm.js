import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, CardHeader, CardBody,Container,Row,Col } from 'reactstrap';
import cardheader from '../../assets/images/square1.png';
import '../../assets/css/Login.css';

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
                    <Container>
                        <Row>
                            <Col md={{size:6,offset:3}} lg={{size:5,offset:0}}>
                                <Card className="card-login">
                                    <CardHeader>
                                        <img className="card-img" src={cardheader} />
                                        <h4 className="card-title">Login</h4>
                                    </CardHeader>
                                    <CardBody>
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
                                    </CardBody>

                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
LoginForm.propTypes = {
    login: propTypes.func.isRequired
}
export default LoginForm;