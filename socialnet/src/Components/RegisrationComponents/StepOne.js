import React, { Component } from 'react';

export default class StepOne extends Component {
    nextStep() {
        this.props.stepRegistration(2);
    }
    render(){
        return(
            <form action="/s" id="registration-first-step" className="registration-form">
                <input className="inp-reg" type="text" placeholder="First name*" />
                <input className="inp-reg" type="text" placeholder="Last name*" />
                <input className="inp-reg" type="email" placeholder="E-mail*" />
                <input className="inp-reg" type="password" placeholder="Password*" />
                <input className="inp-reg" type="password" placeholder="Repeat password*" />
                <div onClick={this.nextStep.bind(this)} className="submit-form" type="submit">Save&Continue</div>
            </form>
        );
    }
}