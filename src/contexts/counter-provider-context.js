import React, { createContext, Component } from 'react';

export const CounterContext = createContext();

class CounterContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            count : 0,
            increment : this.increment,
            decrement : this.decrement
        }
    }

    increment = () => {
        this.setState(oldstate =>({ count: oldstate.count + 1 }));

    }

    decrement = () => {
        this.setState(oldstate => ({ count: oldstate.count - 1 }));

    }

    render() {
        return ( 
//Hanna - the value listed below is the data thats going to be passed to whatever the provider wraps later
//Hanna - this refers to the children that the provider wraps
                <CounterContext.Provider value={ {...this.state} }>
                    {this.props.children}
                </CounterContext.Provider>
            );
        }
    
}

export default CounterContextProvider;