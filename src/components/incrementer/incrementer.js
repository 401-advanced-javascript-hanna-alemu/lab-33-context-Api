import React, { Component } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';
//Hanna - this file renders a button that calls increment from the provider

function Increment () {
    
    return (
        <CounterContext.Consumer>
            {context => (

                <button onClick={context.increment}>Increment</button>
            
            )}

        </CounterContext.Consumer>
    
    );
    
}


export default Increment;