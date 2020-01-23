import React, { Component } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';
import { whileStatement } from '@babel/types';
//Hanna - this file contains a class that renders the current value of the count from the count provider. It uses context type to access the context

class Counter extends Component {

  static contextType = CounterContext;
  render() {
    return (

        <span style={spanStyle}>{this.context.count}</span>
    );
  }
}

const spanStyle ={
  color: 'white',
  backgroundColor: 'blue',
  fontSize: '100px',
  textAlign: 'center',
  margin: '10px'

}
export default Counter;
