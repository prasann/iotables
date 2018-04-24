import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from "material-ui/es/Typography/Typography";

const buttonOverrides = {
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

const ButtonSection = (props) =>
  (<Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
    <div >
      <Typography className={props.classes.heading} variant='display2' align='center' >
        <span >Hold the button to move </span >
      </Typography >
      <div className='center-panel' >
        <section className='left-section' >
          <Button className={props.classes.button} variant="raised" color="primary" >
            <span >Pull up</span >
          </Button >
        </section >
        <section className='right-section' >
          <Button className={props.classes.button} variant="raised" color="secondary" >
            <span >Push down</span >
          </Button >
        </section >
      </div >
    </div >
  </Grid >);

const Content = withStyles(buttonOverrides)(ButtonSection);

class App extends Component {
  render() {
    return (
      <Typography >
        <Content />
      </Typography >
    );
  }
}

export default App;
