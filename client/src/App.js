import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import DashBoard from "./components/DashBoard"
import AirlineInfo from "./components/AirlineInfo"

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        <NavBar />
        <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={DashBoard}/>
          <Route path = "/airline/:id" component={AirlineInfo}/>
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
