import React, { Component } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';
//Hanna - this file renders a button that calls increment from the provider

function Increment () {
    
    return (
        <CounterContext.Consumer>
            {context => (

                <button style={spanStyle} onClick={context.increment}>Increment</button>
            
            )}

        </CounterContext.Consumer>
    
    );
    
}

const spanStyle ={
    color: 'white',
    backgroundColor: 'blue',
    fontSize: '100px',
    textAlign: 'center',
    margin: '10px'

  }

export default Increment;