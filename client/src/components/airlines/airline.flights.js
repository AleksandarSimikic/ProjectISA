import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAirlineFlights } from '../../actions/flight.actions'
import PropTypes from 'prop-types'
import logo from "../../102330156-airplane-symbol-vector-airplane-logo-template-aircraft-silhouette-sign-for-transportation-company-tr.jpg"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';


class AirlineFlights extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getAirlineFlights(id);
    console.log(this.props); 
  }

  render() {
    const { flights } = this.props.flight;
    console.log(flights)


    return(
      <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center", width: '-webkit-fill-available', height: "-webkit-fill-available"}}> 
        <Row style={{marginLeft: "4rem", marginTop: "3rem"}}>   
        <React.Fragment>
              {flights.map(flight => (
                <React.Fragment key={flight._id}>
                {console.log(flight)}
                <Col>
                  <Card style={{ width: "25.2rem", border: "groove", backgroundColor: "rgba(0,0,0,.075)", marginBottom: "2rem", marginRight: "2rem", marginTop: "1rem" }}>
                    <CardImg style={{ width: "24.8rem", height: "19.8rem" }}  src={logo}/>
                    <CardBody>
                      <CardTitle style={{ fontFamily: "Times New Roman", fontWeight: "bolder", fontSize: "30px"}}>Flight: {flight.flight.name}</CardTitle>
                      <CardSubtitle style={{ fontFamily: "Times New Roman", fontWeight: "bolder", fontSize: "20px", "borderTop": "groove"  }}>
                        From: {flight.flight.fromDest} <br/> To: {flight.flight.toDest} <br/> 
                        Midpoints: 
                          {flight.flight.middleDest.map(function(middle, index){
                              return <li key={ index }>{middle}</li>;
                          })}
                        
                      </CardSubtitle>
                      <CardText style={{ overflowY: "auto", height: "90px", padding: "1rem", "borderTop": "groove"  }}>
                        <b>Flight information:</b>
                        <br/>
                        Airline: <u>{flight.flight.airline}</u>
                        <br/>
                        Takeoff: {flight.flight.startDate}
                        <br/>
                        Landing: {flight.flight.endDate}
                        <br/>
                        Avg. Rating: {flight.flight.avgRate}
                        <br/>
                        Cost: {flight.flight.cost}$
                        <br/>
                        Available seats: {flight.flight.availableSeats}
                        <br/>
                        Reserved seats: {flight.flight.reservedSeats}
                        <br/>
                        Duration: {flight.flight.flightDur} hours
                        <br/>
                        Mileage: {flight.flight.mileage} miles
                      </CardText>
                      <a className="btn btn-primary" href={"/flight/" + flight._id} role="button">Book!</a>
                    </CardBody>
                  </Card>
                  </Col>
                </React.Fragment>
              ))}
            </React.Fragment>
            </Row>
        </Container>
    )
    
  }
}

AirlineFlights.propTypes = {
  getAirlineFlights: PropTypes.func.isRequired,
  flight: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  flight: state.flight
})

export default connect(mapStateToProps, { getAirlineFlights })(AirlineFlights);