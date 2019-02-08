import React, { Component } from 'react'
import { Form, FormGroup, Label, Container} from 'reactstrap';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/airline.actions'
import PropTypes from 'prop-types'
import logo from "../../102330156-airplane-symbol-vector-airplane-logo-template-aircraft-silhouette-sign-for-transportation-company-tr.jpg"
import Rating from 'react-rating'

class AirlineInfo extends Component{



  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log(id)
    this.props.getDetails(id);
    console.log(this.props)
  }

  render(){
    // console.log(this.props.airline.airline.airline)
    const airlines  = this.props.airline.airline.airline || {}
    // console.log(airlines)
    const _id = airlines._id
    const airline = airlines.info || {}
    // console.log(airline);

    const { username } = this.props.auth;
    console.log(username)
    const adminLink = 
    (<div><a className="btn btn-primary" style={{marginRight:"1em"}} href={"/airline/" + _id + "/createFlight"} role="button">Create flight for {airline.name}</a>
    <a className="btn btn-primary" style={{marginRight:"1em"}} href={"/airline/" + _id + "/updateAirline"} role="button">Update {airline.name}</a>
    <a className="btn btn-primary" style={{marginRight:"1em"}} href={"/airline/" + _id + "/delete"} role="button">Delete {airline.name}</a></div>)

    
    // const authLink

    return(
    <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center", width: '-webkit-fill-available', height: "-webkit-fill-available"}}>       
      <Form style={{marginTop: "55px", marginLeft: "-5rem"}}>
        <FormGroup>
          {console.log(airlines._id)}
          <Label for="name" style={{fontWeight: "bolder", fontSize: "70px", fontFamily: "monospaced"}}>{airline.name} </Label>
        </FormGroup>
        <FormGroup>
        <br/>
        <Label for="info" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Average Rate: </Label>
        <Rating style={{}} initialRating={airline.avgRate} readonly/> ({airline.avgRate})
        <br/>
        <Label for="infoADesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Info about destinations: {airline.infoAboutDest}</Label>
        <br/>
        <Label for="promoDesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Promo description: {airline.promoDesc}</Label>
        <br/>
        <Label for="email" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Contact: {airline.email}</Label>
        <br/>
        <Label for="lugage" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Max. lugage: {airline.lugageInfo}</Label>
        <br/>
        <Label for="fast" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Fast reservation supported: {airline.fastResDiscount}</Label>
        <br/>
        <a className="btn btn-primary" href={"/airline/" + _id + "/flights"} role="button">Check {airline.name} available flights</a>
        <br/>
        <br/>
        {username.role === 'airlineadmin' ? adminLink : null}


        </FormGroup>
      </Form>
      </Container>
    )  
  }   
}


AirlineInfo.propTypes = {
  getDetails: PropTypes.func.isRequired,
  airline: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  airline: state.airline,
  auth: state.auth
})

export default connect(mapStateToProps, { getDetails })(AirlineInfo);