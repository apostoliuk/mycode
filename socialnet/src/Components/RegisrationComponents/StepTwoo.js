import React, { Component } from 'react';

export default class StepTwoo extends Component {
    stepBack() {
        this.props.stepRegistration(this.props.store.Registration[this.props.store.Registration.length-1] - 1);
    }
    nextStep() {
        this.props.stepRegistration(3);
    }
    render(){
        return( 
        <form action="" id="registration-second-step" className="registration-second-step">
            <input type="date" className="inp-reg" placeholder="Date of birth"/>
            <input type="" className="inp-reg" placeholder="Gender"/>
            <div className="submit-form" type="submit" onClick={this.nextStep.bind(this)}>Save&Continue</div>
            <div className="back-buttom" type="submit" onClick={this.stepBack.bind(this)}>←</div>
        </form>
        );
    }
}