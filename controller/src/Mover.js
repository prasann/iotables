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
    this.defaultMover = this.defaultMover.bind(this);
    this.mexicanWave = this.mexicanWave.bind(this);
    this.state = { mexican: props.scannerData.mexican, waveStarted: false };
    this.transmitter = new Transmitter(props.scannerData);
    this.startWave = this.startWave.bind(this);
  }

  startWave(){
    this.setState({waveStarted: true}, () => this.transmitter.mexicanWave());
  }

  defaultMover() {
    return <Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
      <div >
        <Typography className={this.props.classes.heading} variant='display2' align='center' >
          <span >Hold the button to move </span >
        </Typography >
        <div className='center-panel' >
          <section className='left-section' >
            <Button
              onMouseDown={this.transmitter.moveUp}
              onTouchStart={this.transmitter.moveUp}
              onMouseUp={this.transmitter.stopMovement}
              onTouchEnd={this.transmitter.stopMovement}
              className={this.props.classes.button} variant="raised" color="primary" >
              <span >Up</span >
            </Button >
          </section >
          <section className='right-section' >
            <Button
              onMouseDown={this.transmitter.moveDown}
              onTouchStart={this.transmitter.moveDown}
              onMouseUp={this.transmitter.stopMovement}
              onTouchEnd={this.transmitter.stopMovement}
              className={this.props.classes.button} variant="raised" color="secondary" >
              <span >Down</span >
            </Button >
          </section >
        </div >
      </div >
    </Grid >;
  }

  mexicanWave() {
    return <Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
      <div >
        <Typography className={this.props.classes.heading} variant='display2' align='center' >
          <span >Sit back and relax for the Mexican Wave</span >
        </Typography >
        <div className='center-align' >
          <Button
            onClick={this.startWave}
            disabled={this.state.waveStarted}
            className={this.props.classes.button} variant="raised" color="primary" >
            <span >Start</span >
          </Button >
        </div >
      </div >
    </Grid >;
  }

  render() {
    return this.state.mexican ? this.mexicanWave() : this.defaultMover();
  }
}

export default withStyles(styleOverrides)(MoverSection);