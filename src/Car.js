import React from 'react';
import PropTypes from 'prop-types';
import Engine from './Engine';

export function Car({ color, handleStartCar }) {
  return (
    <div>
      <h1 id='car--heading' style={{ color }}>
        I am a {color} car
      </h1>
      <Engine type='diesel' />
      <button id='car--start' type='button'
        onClick={() => handleStartCar({ startTime: 223 })} > Start
      </button>
    </div>
  );
}
Car.propTypes = {
  color: PropTypes.string.isRequired,
  handleStartCar: PropTypes.func.isRequired
};
export default Car;
