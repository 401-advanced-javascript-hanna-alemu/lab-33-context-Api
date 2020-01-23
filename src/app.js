import React from 'react';

import Counter from './components/counter/counter.js';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Incrementer />
        <Counter />
        <Decrementer />
        
      </>
    );
  }
}
