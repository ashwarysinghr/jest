import React from 'react';
import { mount, shallow } from 'enzyme';
import { Car } from './Car';
import Engine from './Engine';
import toJson from 'enzyme-to-json';

describe('<Car />', () => {
  let wrapper;
  let handleStartCar;
  beforeAll(() => {
    handleStartCar = jest.fn();
    wrapper = shallow(<Car color='red' handleStartCar={handleStartCar} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // check dynamic data renders correctly
  // find elements by ID
  it('renders the heading', () => {
    const heading = wrapper.find('#car--heading');
    expect(heading).toHaveLength(1);
    expect(heading.text()).toEqual('I am a red car');
  });

  // check child components are called correctly
  it('has a diesel engine', () => {
    // testing hint: If the child component is a composed component
    // then you will likely need to find by class otherwise
    // finding by string (e.g. 'Engine') will work
    const engine = wrapper.find(Engine);
    expect(engine.prop('type')).toEqual('diesel');
  });
  
  // check actions
  it('calls handleStartCar on button click', function () {
    const button = wrapper.find('#car--start');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(handleStartCar).toHaveBeenCalledWith({ startTime: 223 });
  });
});
