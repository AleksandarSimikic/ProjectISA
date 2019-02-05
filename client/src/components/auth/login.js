import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Login extends Component {

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    return (
      <div className="container-fluid" style={{width: '-webkit-fill-available', height: "-webkit-fill-available"}} >
      <Container className="Login"  style={{paddingBottom: "10px", paddingTop: "10px", border: "groove", marginTop: '1rem', backgroundColor: "#d9eae8"}}>
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;