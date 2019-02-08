import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { authLogin } from "../../actions/auth.actions"

class Login extends Component {

  state = {
    username: '',
    password: '',
  }
  //this.handleChange = this.handleChange.bind(this);


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state)
}
  
  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log(this.state)
    this.props.authLogin(username, password);
  }  

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/');
    }
}
componentWillReceiveProps(nextProps) {
  if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
  }
}


  render() {
    const { username, password } = this.state;

    return (
      <div className="container-fluid" style={{width: '-webkit-fill-available', height: "-webkit-fill-available"}} >
      <Container className="Login"  style={{paddingBottom: "10px", paddingTop: "10px", border: "groove", marginTop: '3.5rem', backgroundColor: "#d9eae8"}}>
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="username"
                value={username}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                placeholder="********"
                name="password" 
                value={password} 
                onChange={this.handleChange.bind(this)} 
              />
            </FormGroup>
          </Col>
          <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  auth: state.auth
})

export default connect(mapStateToProps, {authLogin})(withRouter(Login));