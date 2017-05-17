import React, { Component } from 'react';



export default class Auth extends Component {

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
                    <a href="#"><span onClick={this.toggleShow.bind(this)} className="registration">Реєстрація</span></a>
                </p>
            </div>
        );
    }
}
