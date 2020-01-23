import React from 'react';

import renderer from 'react-test-renderer';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Counter from '../components/counter/counter';

import Incrementer from '../components/incrementer/incrementer';

import Decrementer from '../components/decrementer/decrementer';

Enzyme.configure({ adapter: new Adapter() });
 

describe('< Counter />', () => {
  it('Is rendered when app starts', () => {
    const app = shallow(<Counter />);

    expect(app.find('span').exists()).toEqual(true);

  });

  it('Count should increase when the increment button is pressed', () => {
    const app = mount(< Incrementer />);
    const input = app.find('button');

    input.simulate('key-pressed');

    expect(app.state().count).toEqual(1);
    
  });
    
  it('count should decrease when the decrement button is pressed ', () => {
    const app = mount(< Decrementer />);
    const button = app.find('button');

    button.simulate('key-pressed');

    expect(app.state().count).toEqual(-1);
   
  });
    
  it('matches snapshot', () => {
    const snapshot = renderer.create(< Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  
});