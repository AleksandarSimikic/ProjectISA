import React, { Component } from 'react'
import { Form, FormGroup, Label, Container} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { reportAirline } from "../../actions/airline.actions"

class Report extends Component{
  
  componentDidMount() {
    const { id } = this.props.match.params
    console.log(id)
    this.props.reportAirline(id)
  }

  render(){
    const report = this.props.report.report.report || {}
    console.log(report);
    return(
    <Container style={{maxWidth: "1600px", maxHeight: "900", alignContent: "center", width: '-webkit-fill-available', height: "-webkit-fill-available"}}>       
      <Form style={{marginTop: "55px", marginLeft: "-5rem",  border: "groove", marginTop: '3.5rem', backgroundColor: "ghostwhite"}}>
        <FormGroup>
          <Label for="name" style={{fontWeight: "bolder", fontSize: "70px", fontFamily: "monospaced"}}>{report.name}</Label>
        </FormGroup>
        <FormGroup>
        <br/>
        <Label for="info" style={{fontWeight: "bold", fontSize: "40px", fontFamily: "georgia"}}>Average Rate: {parseFloat(report.avgRate).toFixed(2)}</Label>
        <br/>
        <Label for="infoADesc" style={{fontWeight: "bold", fontSize: "40px", fontFamily: "georgia"}}>Average income: {report.income}$</Label>
        </FormGroup>
      </Form>
      </Container>
    )  
  }   
}

Report.propTypes = {
  report: PropTypes.object.isRequired,
  reportAirline: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  report: state.airline
})



export default connect(mapStateToProps, {reportAirline})(Report);