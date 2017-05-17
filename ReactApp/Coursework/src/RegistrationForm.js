import React, { Component } from 'react';

export default class RegistrationForm extends Component {
    toggleShow() {
        this.props.onToggleShow(this.props.store[0].show);
    }
    render() {
        return (
            <div className="registrationForm">
                <h1>Форма реєстрації</h1>
                <div className="wrapp-from">
                    <input type="text" placeholder="Full name" />
                </div>
                <div className="wrapp-from">
                    <input type="text" placeholder="Email address" />
                </div>
                <div className="wrapp-from">
                    <input type="text" placeholder="Sex" />
                </div>
                <div className="wrapp-from">
                    <input type="number" placeholder="Age" />
                </div>
                <div className="wrapp-from">
                    <input type="password" placeholder="Password" />
                    <select><option>Sex</option>
                        <option value="Men">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                </div>
                <div className="wrapp-from">
                    <input type="password" placeholder="Repeat password" />
                </div>
                <a href="#"><span onClick={this.toggleShow.bind(this)}>Назад</span></a>
            </div>
        );
    }
}