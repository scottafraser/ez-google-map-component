import React, { Component } from "react";
import Map from "./Map";
import "./App.css";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
