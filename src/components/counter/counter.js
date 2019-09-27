import React, { Component } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';
//Hanna - this file contains a class that renders the current value of the count from the count provider. It uses context type to access the context

class Counter extends Component {

  static contextType = CounterContext;

  render() {
    return (

        <span>{this.context.count}</span>
    );
  }
}

export default Counter;
