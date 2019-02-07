import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import logo from "../102330156-airplane-symbol-vector-airplane-logo-template-aircraft-silhouette-sign-for-transportation-company-tr.jpg";
import { connect } from 'react-redux';
import { getAirlines } from '../actions/airline.actions'
import PropTypes from 'prop-types'

class DashBoard extends Component{
  
  componentDidMount() {
    this.props.getAirlines();
   // console.log(this.props)
  }

  render() {
   //console.log(this.props)
    const { airlines } = this.props.airline
    console.log(airlines)
    return(
      <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center"}}> 
        <h1 className="title" style={{fontFamily: "Times-New-Roman", marginTop: "55px", fontStyle: "normal", fontWeight:"bold", color: "", fontSize: "50px", textAlign: "center"}}>Airlines</h1>
          <Row style={{marginLeft: "4rem"}}>
            <React.Fragment>

              {airlines.map(airline => (
                <React.Fragment key={airline._id}>
                <Col style={{verticalAlign: "middle"}}>
                {/* {console.log(airline)} */}
                  <Card style={{ width: "25.2rem", border: "groove", backgroundColor: "rgba(0,0,0,.075)", marginBottom: "2rem", marginRight: "2rem", marginTop: "1rem" }}>
                    <CardImg style={{ width: "24.8rem", height: "19.8rem" }}  src={logo}/>
                    <CardBody>
                      <CardTitle style={{ fontFamily: "Times New Roman", fontWeight: "bolder", fontSize: "30px"}}>{airline.info.name}</CardTitle>
                      <CardSubtitle style={{ fontFamily: "Times New Roman", fontWeight: "bolder", fontSize: "20px", "borderTop": "groove"  }}>
                        Headquarters: {airline.info.location}
                      </CardSubtitle>
                      <CardText style={{ overflowY: "auto", height: "90px", padding: "1rem", "borderTop": "groove"  }}>
                        <b>Promo Description:</b> {airline.info.promoDesc}
                        <br/>
                        <b>Info about destinations:</b> {airline.info.infoAboutDest}
                      </CardText>
                      <a className="btn btn-primary" href={"/airline/" + airline._id} role="button">Go to {airline.info.name}</a>
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

DashBoard.propTypes = {
  getAirlines: PropTypes.func.isRequired,
  airline: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  airline: state.airline
})

export default connect(mapStateToProps, { getAirlines })(DashBoard);