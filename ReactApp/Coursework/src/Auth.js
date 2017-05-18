import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire'; 
import * as firebase from 'firebase';



export default class Auth extends Component {
    constructor(props) {
        super();
        this.state = {
            users: []
        }
    }
    eacher() {
        return this.bindAsArray(firebase.database().ref().child('users'), 'users');
    }
    componentDidMount() {
        this.eacher();
    }
    
    pushInStore() {
        this.props.pushUsers(this.state.users);
        console.log(this.props.store);
    }
    
    toggleShow() { 
        this.props.onToggleShow(this.props.store[0].show);
        
    }
    
    render() {
        return (
            <div className="FormBlock">
                <h1>Авторизація</h1>
                <form action="">
                    <input type="text" className="form" placeholder="Login"/>
                    <input type="password" className="form" placeholder="Password"/>
                </form>
                <p>
                    <a href="#"><span onClick={this.pushInStore.bind(this)} className="registration">Ввійти</span></a>
                    <a href="#"><span onClick={this.toggleShow.bind(this)} className="registration">Реєстрація</span></a>
                </p>
            </div>
        );
    }
}
ReactMixin(Auth.prototype, ReactFireMixin);

