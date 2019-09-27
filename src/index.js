import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

//Hanna - counter context

import CounterContextProvider from './contexts/counter-provider-context';

class Main extends React.Component {
  render() {
    return (
      //Hanna - wrap this App with the counter context app is attached to the props of the provider
      <CounterContextProvider>

           <App />

      </CounterContextProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
