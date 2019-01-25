import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink} from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: "",
    };
  }

  componentDidMount() {
    console.log("component is mounting")
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => 
        console.log(err))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <span><NavLink exact to="/">Smurf List</NavLink></span>
          <span><NavLink to="/smurf-form">Smurf Form</NavLink></span>
        </div>
        <Route
          exact path="/"
          render={props =>
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />}
        />
        <Route 
          path="/smurf-form"
          render={props =>
            <SmurfForm
              {...props}
            />}
        />
        <Route
          path="/smurfs/:id"
          render= {props =>
            <Smurf
              {...props}
              // name={"hello"}
              // age={this.state.age}
              // height={this.state.height}
            />
          }
        />
      </div>
    );
  }
}

export default App;
