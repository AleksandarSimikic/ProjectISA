import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { connect } from "react-redux"
import { authRegister } from '../../actions/auth.actions'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

class Register extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
    residency: '',
    sex: '',
    name: '',
    surname: ''

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state;
    console.log(user)
    this.props.authRegister(user, this.props.history);
  }
  render() {

    const username = this.state
    return (
      <Container style={{width: '-webkit-fill-available', height: "-webkit-fill-available"}}>
      <Container className="Register"  style={{paddingBottom: "10px", paddingTop: "10px", border: "groove", marginTop: '3.5rem', backgroundColor: "#d9eae8"}}>
        <h2>Registration</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="username"
                onChange={this.handleChange.bind(this)}
                value={username.username}
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
                onChange={this.handleChange.bind(this)}
                value={username.password}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Donald"
                name='name'
                onChange={this.handleChange.bind(this)}
                value={username.name}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Surname</Label>
              <Input
                type="text"
                placeholder="Trump"
                name="surname"
                onChange={this.handleChange.bind(this)}
                value={username.surname}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Date of birth</Label>
              <Input
                type="date"
                name="dateOfBirth"
                onChange={this.handleChange.bind(this)}
                value={username.dateOfBirth}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Sex</Label>
              <Input
                type="text"
                placeholder="Male/Female"
                name="sex"
                onChange={this.handleChange.bind(this)}
                value={username.sex}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Residency</Label>
              <Input
                type="text"
                placeholder="Cara Lazara 13 Novi Sad"
                name="residency"
                onChange={this.handleChange.bind(this)}
                value={username.residency}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="donaldtrump1995@hotmail.com"
                name="email"
                onChange={this.handleChange.bind(this)}
                value={username.email}
              />
            </FormGroup>
          </Col>
          <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Form>
      </Container>
      </Container>
    );
  }
}

Register.propTypes = {
  authRegister: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,

})

export default connect(mapStateToProps, { authRegister })(withRouter(Register));