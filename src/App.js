import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car';
import * as actions from './actions';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const { handleStartCar, isRunning } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {isRunning ? 'The car is running  ' : 'Click to start the car'}
        </p>
        <Car color='blue' handleStartCar={handleStartCar} />
      </div>
    );
  }
}

App.defaultProps = {
  isRunning: false,
  handleStartCar: () => {
    console.log('car started');
  }
}
export default connect(
  (state) => ({
    isRunning: state.isRunning
  }),
  {...actions}
)(App);
