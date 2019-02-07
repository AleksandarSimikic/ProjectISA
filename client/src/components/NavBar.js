import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Button,
  Input,
  FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutUser } from '../actions/auth.actions';
import { withRouter } from 'react-router-dom'



class NavBar extends React.Component {
    state = {
      isOpen: false
    };
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    console.log(this.props.auth)
    const {isAuthenticated} = this.props.auth;
    const guestLinks = (<UncontrolledDropdown nav inNavbar>      
                        <DropdownToggle nav caret>
                          User Options
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem href="/user/register">
                          Register
                          </DropdownItem>
                          <DropdownItem href="/user/login">
                            Log In
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            About this App
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    )
    const authLinks = (<UncontrolledDropdown nav inNavbar>      
      <DropdownToggle nav caret>
        User Options
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href={"/user/" + this.props.auth.username._id}>
        Profile
        </DropdownItem>
        <DropdownItem onClick={this.onLogout.bind(this)}>
          Log Out
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          About this App
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )

    return (
      <div>
        <Navbar  fixed ="top" color="dark" dark expand="md">
          <NavbarBrand href="/">FlightBookingService</NavbarBrand>
          <Form className="form-inline my-2 my-lg-0">
            <FormGroup>
              <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </FormGroup>
          </Form>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/AleksandarSimikic/ProjectISA">GitHub</NavLink>
              </NavItem>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


const mapStateToProps = (state) =>({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));