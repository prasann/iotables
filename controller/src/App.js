import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


class App extends Component {
  render() {
    return (
      <Grid className='main-grid' container spacing={24} justify='center' alignItems='center' >
        <div className='center-panel' >
          <section className='left-section' >
            <Button className="ctrl-button" variant="raised" color="primary" >
              Table Up
            </Button >
          </section >
          <section className='right-section' >
            <Button className="ctrl-button" variant="raised" color="secondary" >
              Table Down
            </Button >
          </section >
        </div >
      </Grid >
    );
  }
}

export default App;
