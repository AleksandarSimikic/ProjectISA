import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from "./components/NavBar"
import { Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import DashBoard from "./components/DashBoard"

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <NavBar />
          <DashBoard />
        </div>
      </Provider>
    );
  }
}

export default App;
