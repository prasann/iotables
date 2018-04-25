import React, { Component } from 'react';
import Typography from "material-ui/Typography";
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Transmitter from './transmitter';
import { withStyles } from 'material-ui/styles';
import './Mover.css';

const styleOverrides = {
  button: {
    width: '150px',
    padding: '30px',
    textTransform: 'none',
    fontSize: '120%',
  },
  heading: {
    color: 'white',
    textWeight: 'bold',
  }
};

class MoverSection extends Component {

  constructor(props) {
    super(props);
    this.transmitter = new Transmitter(props.scannerData);
    this.tableUp = this.tableUp.bind(this);
    this.tableDown = this.tableDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  tableDown() {
    this.transmitter.sendMessage("DOWN");
  }

  tableUp() {
    this.transmitter.sendMessage("UP");
  }

  mouseUp() {
    this.transmitter.sendMessage("STOP");
  }

  render() {
    return (<Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
      <div >
        <Typography className={this.props.classes.heading} variant='display2' align='center' >
          <span >Hold the button to move </span >
        </Typography >
        <div className='center-panel' >
          <section className='left-section' >
            <Button
              onMouseDown={this.tableUp}
              onMouseUp={this.mouseUp}
              className={this.props.classes.button} variant="raised" color="primary" >
              <span >Up</span >
            </Button >
          </section >
          <section className='right-section' >
            <Button
              onMouseDown={this.tableDown}
              onMouseUp={this.mouseUp}
              className={this.props.classes.button} variant="raised" color="secondary" >
              <span >Down</span >
            </Button >
          </section >
        </div >
      </div >
    </Grid >);
  }
}


export default withStyles(styleOverrides)(MoverSection);
