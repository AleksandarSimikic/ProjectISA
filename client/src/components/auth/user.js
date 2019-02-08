import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { getUser, getUserTickets, unreserveTicket, deleteUser } from '../../actions/user.actions'
import PropTypes from 'prop-types'



class User extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getUser(id);
    this.props.getUserTickets(id);
  }

  handleUnreserve = (id) => {
    this.props.unreserveTicket(id);
  }

  handleDelete = (e) => {
    e.preventDefault()
    console.log("User deleted!")
    const { id } = this.props.match.params;
    this.props.deleteUser(id);
  }

  render() {

    const user = this.props.user.user.user || {}
    const tickets = this.props.user.tickets
    console.log(tickets)

    return (
      <Container style={{minWidth: "1600px", minHeight: "900px", alignContent: "center", width:"auto", height:"auto"}}>       
      <Form style={{marginTop: "55px", marginLeft: "-5rem"}}>
        <FormGroup>
          {console.log(user._id)}
          <Label for="name" style={{fontWeight: "bolder", fontSize: "70px", fontFamily: "monospaced"}}>{user.name} {user.surname} </Label>
        </FormGroup>
        <FormGroup>
        
        <Label for="username" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia", borderColor:""}}>Username: {user.username}</Label>
        <br/>
        <Label for="dateOfBirth" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Date of birth: {user.dateOfBirth}</Label>
        <br/>
        <Label for="sex" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Sex: {user.sex}</Label>
        <br/>
        <Label for="email" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Contact: {user.email}</Label>
        <br/>
        <Label for="residency" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}>Residency: {user.residency}</Label>
        <br/>
        <a className="btn btn-primary"style={{marginRight:"1rem"}} role="button" onClick={this.handleDelete} href="/">Delete account!</a>
        <a className="btn btn-primary" role="button" onClick={this.handleDelete}>Update account!</a>

        <br/>
        <br/>
        
        <Label for="tickets" style={{fontWeight: "500", fontSize: "20px", fontFamily: "georgia"}}><b>Tickets:</b>
        <br/>
        
        <React.Fragment>
              {tickets.map(ticket => (
                <React.Fragment key={ticket._id}>
               
                    
                      <b>Ticket id: {ticket._id}</b> <br/>
                      Flight: {ticket.flightName}<br/>
                      From: {ticket.fromDest} <br/>
                      To: {ticket.toDest} <br/>
                      Date of takeoff: {ticket.flightStartDate} <br/>
                      Date of landing: {ticket.flightEndDate} <br/>
                      Date of expiry: {ticket.dateOfExp} <br/>
                      Middle destinations: {ticket.middleDest}<br/>
                      <a className="btn btn-primary" role="button" onClick={() => this.handleUnreserve(ticket._id)} href="javascript:window.location.href=window.location.href">Unreserve!</a>
                    <br/><br/>
                </React.Fragment>
              ))}
            </React.Fragment>
        </Label>
        </FormGroup>
      </Form>
      </Container>
    )
  }
}
User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getUserTickets: PropTypes.func.isRequired,
  unreserveTicket: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, { getUser, getUserTickets, unreserveTicket, deleteUser })(User);