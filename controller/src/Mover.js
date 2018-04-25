import React from 'react';
import Typography from "material-ui/Typography";
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
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

const MoverSection = (props) =>
  (<Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
    <div >
      <Typography className={props.classes.heading} variant='display2' align='center' >
        <span >Hold the button to move </span >
      </Typography >
      {console.log(props.scannerData)}
      <div className='center-panel' >
        <section className='left-section' >
          <Button className={props.classes.button} variant="raised" color="primary" >
            <span >Up</span >
          </Button >
        </section >
        <section className='right-section' >
          <Button className={props.classes.button} variant="raised" color="secondary" >
            <span >Down</span >
          </Button >
        </section >
      </div >
    </div >
  </Grid >);

export default withStyles(styleOverrides)(MoverSection);
