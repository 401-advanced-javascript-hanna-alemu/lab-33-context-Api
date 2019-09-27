//Hanna - this file renders a button that calls the decrementer from the provider

import React, { useContext } from 'react';

import { CounterContext } from '../../contexts/counter-provider-context';

const Decrementer = () => {
        const context =  useContext(CounterContext);

        return (
                <button onClick={context.decrement}>Decrement</button>
        )
}

export default Decrementer;