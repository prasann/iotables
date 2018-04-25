import React from 'react'
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

const handleError = (error) => {
  console.log(error);
};

const ScannerSection = (props) =>
  (<Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
    <div >
      <Typography className={props.classes.heading} variant='display2' align='center' >
        <span >Scan the QR from the table</span >
      </Typography >
      <QrReader
        onError={handleError}
        onScan={props.handleScan} />
    </div >
  </Grid >);

export default withStyles(styleOverrides)(ScannerSection);
