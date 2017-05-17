import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import RegistrationForm from './RegistrationForm';

class App extends Component {
  render() {
    let showFormsLogin;
    let showFormReg;
    if(this.props.store[0].show === true) {
      showFormsLogin = <Auth onToggleShow={this.props.onToggleShow} store={this.props.store} initialState={this.props.initialState}/>;
    }else{
      showFormReg = <RegistrationForm onToggleShow={this.props.onToggleShow} store={this.props.store} initialState={this.props.initialState}/>;
    }
    return (
      <div>
        {showFormsLogin}
        {showFormReg}
      </div>
    );
  }
}
export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onToggleShow: orShow => {
      dispatch({ type: 'SHOW_FORM', payload: orShow });
    }
  })
)(App);
