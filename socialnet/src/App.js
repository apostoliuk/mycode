import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Registration from './Components/RegisrationComponents/Registration.js';

class App extends Component {
  render() {
      console.log(this.props.store);
    return (
        <div className="wrapper">
            <Registration stepRegistration={this.props.stepRegistration} store={this.props.store}/>
        </div>
    );
  }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        stepRegistration: step => {
            dispatch({type: 'SHOW_REG_FORM', payload: step});
        },
        datesRegistrationForm: obj => {
            dispatch({type:'DATES_REG', payload: obj});
}
    })
)(App);




