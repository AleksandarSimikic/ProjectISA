import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import DashBoard from "./components/DashBoard"
import AirlineInfo from "./components/airlines/airline.info"
import AirlineFlights from "./components/airlines/airline.flights"
import Login from "./components/auth/login"
import Register from "./components/auth/register"
import img from "./NcdUsHW.jpg"

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App" style={{backgroundImage: "url(" + img + ")", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component={DashBoard}/>
            <Route exact path = "/airline/:id" component={AirlineInfo}/>
            <Route exact path = "/airline/:id/flights" component={AirlineFlights}/>
            <Route exact path = '/user/login' component={Login}/>
            <Route exact path = "/user/register" component={Register}/>
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
