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
import jwt_decode from 'jwt-decode';
import setAuthToken from './actions/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/auth.actions';
import CreateFlight from "./components/flights/create.flight"


if(localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
  console.log(decoded)
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
console.log("SHIT")

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App" style={{backgroundImage: "url(" + img + ")", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
        <BrowserRouter>
        <div>
        <NavBar/>
          <Switch>
            <Route exact path = "/" component={DashBoard}/>
            <Route exact path = "/airline/:id" component={AirlineInfo}/>
            <Route exact path = "/airline/:id/flights" component={AirlineFlights}/>
            <Route exact path = '/user/login' component={Login}/>
            <Route exact path = "/user/register" component={Register}/>
            <Route exact path = "/airline/:id/createFlight" component={CreateFlight}/>
          </Switch>
          </div>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
