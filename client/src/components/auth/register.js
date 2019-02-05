import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Register extends Component {

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    return (
      <div className="container-fluid" >
      <Container className="Register"  style={{paddingBottom: "10px", paddingTop: "10px", border: "groove", marginTop: '1rem', backgroundColor: "#d9eae8"}}>
        <h2>Registration</h2>
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
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Donald"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Surname</Label>
              <Input
                type="text"
                placeholder="Trump"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Date of birth</Label>
              <Input
                type="date"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Sex</Label>
              <Input
                type="text"
                placeholder="Male/Female"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Residency</Label>
              <Input
                type="text"
                placeholder="Cara Lazara 13 Novi Sad"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="donaldtrump1995@hotmail.com"
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

export default Register;