import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Container, Input } from 'reactstrap';

import { getDetails, updateAirline } from "../../actions/airline.actions"

class AirlineUpdate extends Component {

  state = {
    name: '',
    rate: '',
    location: '',
    email: '',
    promoDesc: '',
    infoAboutDest: '',
    lugageInfo: '',
    fastResDiscount: ''
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

   
  handleSubmit = (e) => {
    e.preventDefault();
    const {id} = this.props.match.params;
   // this.props.updateAirline(id, airline);
    this.props.history.push('/');
  }  

  componentWillReceiveProps() {
    const { id } = this.props.match.params;
    //console.log(id)
    this.props.getDetails(id);
    console.log(this.props)
  }

  render() {

    const airlines  = this.props.airline.airline.airline || {}
    // console.log(airlines)
    const _id = airlines._id
    const airline = airlines.info || {}
    console.log(_id);
    console.log(airline);

    return (
      <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center", width: '-webkit-fill-available', height: "-webkit-fill-available"}}>       
      <Form style={{marginTop: "55px", marginLeft: "-5rem"}}>
        <FormGroup>
          {console.log()}
          <Label for="name" style={{fontWeight: "bolder", fontSize: "70px", fontFamily: "monospaced"}}>{} </Label>
        </FormGroup>
        <FormGroup>
        <br/>
        <Label for="info" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Airline Name: </Label>
        <Input 
          type="text"
          value={airline.name}
          name="name"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <Label for="infoADesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Info about destinations:</Label>
        <Input 
          type="textarea"
          value={airline.infoAboutDest}
          name="infoAboutDest"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <Label for="promoDesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Promo description: </Label>
        <Input 
          type="textarea"
          value={airline.promoDesc}
          name="promoDesc"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <Label for="email" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Contact: </Label>
        <Input 
          type="email"
          value={airline.email}
          name="email"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <Label for="lugage" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Max. lugage: </Label>
        <Input 
          type="text"
          value={airline.lugageInfo}
          name="lugageInfo"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <Label for="fast" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Fast reservation supported: </Label>
        <Input 
          type="text"
          value={airline.fastResDiscount}
          name="fastResDiscount"
          onChange={this.handleChange.bind(this)}
        />
        <br/>
        <a className="btn btn-primary" role="button">Update</a>
        <br/>
        <br/>


        </FormGroup>
      </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  airline: state.airline
})

export default connect(mapStateToProps, { updateAirline, getDetails })(AirlineUpdate);