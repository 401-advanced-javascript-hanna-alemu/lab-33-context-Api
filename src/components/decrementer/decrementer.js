//Hanna - this file renders a button that calls the decrementer from the provider

import React, { useContext } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';

const Decrementer = () => {
        const context =  useContext(CounterContext);

        return (
                <button style={spanStyle} onClick={context.decrement}>Decrement</button>
        )
}


const spanStyle ={
        color: 'white',
        backgroundColor: 'blue',
        fontSize: '100px',
        textAlign: 'center',
        margin: '10px'
      }
export default Decrementer;