import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = [
  {show: true}
];
 
function showForm(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_FORM': 
      return [
        {show : !action.payload}
      ];
      default: 
      break;
  }
  return state;
}
const store = createStore(showForm);

ReactDOM.render(
  <Provider store={store}>
    <App initialState={initialState}/>
  </Provider>,
  document.getElementById('root')
);

