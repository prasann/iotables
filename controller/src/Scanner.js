import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { withStyles } from 'material-ui/styles';

const styleOverrides = {
  heading: {
    color: 'white',
    textWeight: 'bold',
  }
};

class ScannerSection extends Component {
  constructor() {
    super();
    this.state = { error: "" };
    this.handleData = this.handleData.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(e) {
    this.setState({ error: e })
  };

  handleData(stringData) {
    try {
      this.setState({ error: "" });
      this.props.handleScan(JSON.parse(stringData));
    } catch (e) {
      this.setState({ error: "Invalid data in QR Code" })
    }
  }

  render() {
    return <Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
      <div >
        <Typography color="error"
                    variant='title'
                    align='center' >
          <span >{this.state.error}</span >
        </Typography >
        <Typography className={this.props.classes.heading} variant='display2' align='center' >
          <span >Scan the QR from the table</span >
        </Typography >
        <QrReader
          onError={this.handleError}
          onScan={this.handleData} />

      </div >
    </Grid >
  }
}

export default withStyles(styleOverrides)(ScannerSection);
