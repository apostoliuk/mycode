import React, { Component } from 'react';

export default class StepThree extends Component {
    stepBack() {
        this.props.stepRegistration(this.props.store.Registration[this.props.store.Registration.length-1] - 1);
    }
    render(){
        return( 
            <div action="" id="registration-third-step" className="registration-form">
                <ul className="show-data-from-forms">
                    <li>First name :</li>
                    <li>Last Name :</li>
                    <li>E-mail :</li>
                    <li>Date of birth :</li>
                    <li>Gender :</li>
                </ul>
                <div className="back-buttom" type="submit" onClick={this.stepBack.bind(this)}>←</div>
                <div className="submit-form" type="submit">Save&Send</div>
            </div>
        );
    }
}


