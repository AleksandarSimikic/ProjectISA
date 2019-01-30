import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "./102330156-airplane-symbol-vector-airplane-logo-template-aircraft-silhouette-sign-for-transportation-company-tr.jpg"

class DashBoard extends Component{

  state = {
    airlines: []
  }

  componentDidMount() {
    axios.get('/airline/airlines/all').then(res => {
      const airlines = res.data;
     // console.log(users);
      this.setState({airlines});
    }).catch(error => alert(error))
  }


  render() {
    
    
    
    return(
      <div>
      <React.Fragment>
        {this.state.airlines.map(airline => (
          <React.Fragment key={airline._id}>
          <div className="container">
            <Card style={{ width: "200px", height: "200px" }}>
              <CardImg style={{ width: "200px", height: "200px" }}  src={logo}/>
              <CardBody>
                <CardTitle>{airline.info.name}</CardTitle>
                <CardSubtitle>{airline.info.location}</CardSubtitle>
                <CardText>{airline.info.promoDesc}</CardText>
                <Button>Go to {airline.info.name}!</Button>
              </CardBody>
            </Card>
          </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    </div>
    )
  }

}

export default DashBoard;