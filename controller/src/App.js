import React, { Component } from 'react';
import Mover from './Mover';
import Scanner from './Scanner';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.setTableDetails = this.setTableDetails.bind(this);
  }

  setTableDetails(data) {
    this.setState({ details: data });
  };

  render() {
    return this.state.details ? <Mover /> : <Scanner handleScan={this.setTableDetails} />
  }
}

export default App;
