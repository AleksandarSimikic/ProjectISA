import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {createFlight} from '../../actions/flight.actions'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class CreateFlight extends Component {

  state = {
      name: '',
      fromDest: '',
      toDest: '',
      startDate: Date.now()/1000,
      endDate: Date.now()/1000,
      cost: 0,
      flightDur: 0,
      mileage: 0,
      availableSeats: 0,
      middleDest: [],

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const {id} = this.props.match.params;
    const flight  = this.state;
    console.log(flight)
    this.props.createFlight(id, flight);
    this.props.history.push('/');
  }  

  render() {
    const {name, fromDest, toDest, startDate, endDate, cost, flightDur, mileage, middleDest, availableSeats} = this.state
    return (
      <Container className="Create flight"  style={{paddingBottom: "10px",maxWidth: "1600px", maxHeight: "900", alignContent: "center", paddingTop: "10px", border: "groove", marginTop: '3.5rem', backgroundColor: "#d9eae8"}}>
        <h2>Create flight</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Flight name: </Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="name"
                value={name}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Takeoff destination: </Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="fromDest"
                value={fromDest}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Landing destination: </Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="toDest"
                value={toDest}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Date of takeoff: </Label>
              <Input
               type="Date"
               placeholder="donaldtrump1995"
               name="startDate"
               value={startDate}
               onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Date of landing: </Label>
              <Input
                type="date"
                placeholder="donaldtrump1995"
                name="endDate"
                value={endDate}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Ticket price: </Label>
              <Input
                type="number"
                placeholder="donaldtrump1995"
                name="cost"
                value={cost}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Flight duration: </Label>
              <Input
                type="number"
                placeholder="donaldtrump1995"
                name="flightDur"
                value={flightDur}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Mileage: </Label>
              <Input
                type="number"
                placeholder="donaldtrump1995"
                name="mileage"
                value={mileage}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Available seats: </Label>
              <Input
                type="number"
                placeholder="donaldtrump1995"
                name="availableSeats"
                value={availableSeats}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Middle destination(s): </Label>
              <Input
                type="text"
                placeholder="donaldtrump1995"
                name="middleDest"
                value={middleDest}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </Container>
    )
  }

}

const mapStateToProps = (state) => ({
  flight: state.flight
})

export default connect(mapStateToProps, { createFlight })(CreateFlight)