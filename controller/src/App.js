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
    this.setState({ scannerData: data });
  };

  render() {
    return this.state.scannerData
      ? <Mover scannerData={this.state.scannerData} />
      : <Scanner handleScan={this.setTableDetails} />
  }
}

export default App;
