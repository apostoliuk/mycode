import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire'; 
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBC2AxS9eWBxOcZLZhd3Y3CPIyhIES1jmw",
    authDomain: "baseusers.firebaseapp.com",
    databaseURL: "https://baseusers.firebaseio.com",
    projectId: "baseusers",
    storageBucket: "baseusers.appspot.com",
    messagingSenderId: "517583571468"
}

firebase.initializeApp(config);
export default class RegistrationForm extends Component {
    toggleShow() {
        this.props.onToggleShow(this.props.store[0].show);
    }

    submitForm(event) {
        event.preventDefault();
        if( this.fullName.value.length && this.emailAddress.value.length && this.Sex.value.length && this.Age.value.length && this.Password.value.length && this.repeatPassword.value.length && this.Password.value === this.repeatPassword.value) {
            const users = {
                fullName: this.fullName.value,
                emailAddress: this.emailAddress.value,
                Sex: this.Sex.value,
                Age: this.Age.value,
                Password: this.Password.value,
                repeatPassword : this.repeatPassword.value
            }

            firebase.database().ref().child('users').push(users).then(
                () => {
                this.fullName.value = '';
                this.emailAddress.value = '';
                this.Sex.value = '';
                this.Age.value = '';
                this.Password.value = '';
                this.repeatPassword.value = '';
                this.toggleShow();
            }         
            )

        }
    }
    render() {
        return (
            <div className="registrationForm">
                <h1>Форма реєстрації</h1>
                <div className="wrapp-from">
                    <input type="text" placeholder="Full name" ref={input => this.fullName = input} />
                </div>
                <div className="wrapp-from">
                    <input type="text" placeholder="Email address" ref={input => this.emailAddress = input} />
                </div>
                <div className="wrapp-from">
                    <input type="text" placeholder="Sex" ref={input => this.Sex = input} />
                </div>
                <div className="wrapp-from">
                    <input type="number" placeholder="Age" ref={input => this.Age = input} />
                </div>
                <div className="wrapp-from">
                    <input type="password" placeholder="Password" ref={input => this.Password = input} />
                </div>
                <div className="wrapp-from">
                    <input type="password" placeholder="repeatPassword" ref={input => this.repeatPassword = input} />
                </div>
             
                <div className="submit" onClick={this.submitForm.bind(this)} id="submit">Зареєструватися</div>
                <a href="#"><span onClick={this.toggleShow.bind(this)}>Назад</span></a>
            </div>
        );
    }
}
ReactMixin(RegistrationForm.prototype, ReactFireMixin);