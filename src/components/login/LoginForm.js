import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody,Container,Row,Col } from 'reactstrap';
import cardheader from '../../assets/images/square1.png';
import '../../assets/css/Login.css';
const LoginForm=(a)=>{
    const [fields,setFields]=useState({email:"",password:""});
    
    // state = {
    //     // loginFailed: false,
    //     fields: {
    //       email: '',
    //       password: ''
    //     }
    //   }
   const handleSubmit = event=> {
        event.preventDefault();
      a.s(fields.email, fields.password)
            // .catch(err => {
            //     console.log(err)
            //     this.loginFailed()
            // })
    }
     const onInputChange= event => {
        event.preventDefault();
         setFields({...fields,[event.target.name]:event.target.value});
        // const fields = this.state.fields
        // fields[event.target.name] = event.target.value
        // this.setState({ fields })
    }
     return(
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
                                    <form className="Login-Form" onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i></i></span>

                                            </div>
                                            <input className="form-control" onChange={onInputChange} placeholder="Enter Username" value={fields.email} name="email" type="text" />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i></i></span>

                                            </div>
                                            <input className="form-control" onChange={onInputChange} placeholder="Enter Password" value={fields.password} name="password" type="password" />
                                        </div>
                                        <div className="Form-Footer">
                                            <input type="submit" className="btn btn-info btn-round btn-lg" value="Login" />
                                        </div>
                                    </form>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                {/* <p>{this.props.error}</p> */}
                </Container>
            </div>
        </div>
        );
}


// class LoginForm extends Component {

//     state = {
//         // loginFailed: false,
//         fields: {
//           email: '',
//           password: ''
//         }
//       }
//       handleSubmit = event=> {
//         event.preventDefault();
//         this.props.login(this.state.fields.email, this.state.fields.password)
//             // .catch(err => {
//             //     console.log(err)
//             //     this.loginFailed()
//             // })
//     }

//     // loginFailed() {
//     //     this.setState({
//     //         // loginFailed: true,
//     //         fields: {
//     //             email: '',
//     //             password: ''
//     //         }
//     //     })
//     // }
//     onInputChange= event => {
//         const fields = this.state.fields
//         fields[event.target.name] = event.target.value
//         this.setState({ fields })
//     }
//     render() {
//         return (
//             <div className="Login">
//                 <div className="Login-content">
//                     <Container>
//                         <Row>
//                             <Col md={{size:6,offset:3}} lg={{size:5,offset:0}}>
//                                 <Card className="card-login">
//                                     <CardHeader>
//                                         <img className="card-img" src={cardheader} />
//                                         <h4 className="card-title">Login</h4>
//                                     </CardHeader>
//                                     <CardBody>
//                                         <form className="Login-Form" onSubmit={this.handleSubmit}>
//                                             <div className="input-group">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text"><i></i></span>

//                                                 </div>
//                                                 <input className="form-control" onChange={this.onInputChange} placeholder="Enter Username" value={this.state.fields.email} name="email" type="text" />
//                                             </div>
//                                             <div className="input-group">
//                                                 <div className="input-group-prepend">
//                                                     <span className="input-group-text"><i></i></span>

//                                                 </div>
//                                                 <input className="form-control" onChange={this.onInputChange} placeholder="Enter Password" value={this.state.fields.password} name="password" type="password" />
//                                             </div>
//                                             <div className="Form-Footer">
//                                                 <input type="submit" className="btn btn-info btn-round btn-lg" value="Login" />
//                                             </div>
//                                         </form>
//                                     </CardBody>

//                                 </Card>
//                             </Col>
//                         </Row>
//                     <p>{this.props.error}</p>
//                     </Container>
//                 </div>
//             </div>
//         );
//     }
// }
// LoginForm.PropTypes = {
//     s: PropTypes.func.isRequired
// }
export default LoginForm;