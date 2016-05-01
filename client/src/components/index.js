// EXAMPLE CODE:
// This is the main entry point for the app. It renders the App component after wrapping it in the Provider from Redux.
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux'

import App from './App.js'

// Generate initial state
let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

// Create Redux store with initial state. The store manages the state of our app. 
let store = createStore(rootReducer, initialState);

var render = function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    // document.getElementById('app')
  );
};
render();

//--------------- Notes: ------------//
// {() => <App/ >}
// is ES6 for...

// function() {
//   render (
//     return <App />
//   )
// }
// which is just...

// <Scene />