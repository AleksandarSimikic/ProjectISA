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
    const airlines  = this.props.airline.airlines.info || {}
    const _id = this.props.airline.airlines._id
    console.log(_id);


    return(
    <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center", width: '-webkit-fill-available', height: "-webkit-fill-available"}}>       
      <Form style={{marginTop: "55px", marginLeft: "-5rem"}}>
        <FormGroup>
          <Label for="name" style={{fontWeight: "bolder", fontSize: "70px", fontFamily: "monospaced"}}>{airlines.name} </Label>
        </FormGroup>
        <FormGroup>
        <br/>
        <Label for="info" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Average Rate: </Label>
        <Rating style={{}} initialRating={airlines.avgRate} readonly/> ({airlines.avgRate})
        <br/>
        <Label for="infoADesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Info about destinations: {airlines.infoAboutDest}</Label>
        <br/>
        <Label for="promoDesc" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Promo description: {airlines.promoDesc}</Label>
        <br/>
        <Label for="email" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Contact: {airlines.email}</Label>
        <br/>
        <Label for="lugage" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Max. lugage: {airlines.lugageInfo}</Label>
        <br/>
        <Label for="fast" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Fast reservation supported: {airlines.fastResDiscount}</Label>
        <br/>
        <a className="btn btn-primary" href={"/airline/" + _id + "/flights"} role="button">Check {airlines.name} available flights</a>


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
  airline: state.airline
})

export default connect(mapStateToProps, { getDetails })(AirlineInfo);