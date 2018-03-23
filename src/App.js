import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // set up a constructor
  constructor() {
    // allows us to use something like this
    super();
    this.state = {
      count: 0
    };
  }

  // use arrow notation that takes in no parameters
  increament = () => {
    this.setState({count: this.state.count + 1});
  }

  render () {
    return(
      <div>
      <button onClick={this.increament}>Increament</button>
      {this.state.count}
      </div>
    );
  }
}

export default App;
