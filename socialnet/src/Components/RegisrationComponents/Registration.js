import React, { Component } from 'react';
import DownloadLine from './DownloadLine';
import StepOne from './StepOne.js';
import StepTwoo from './StepTwoo.js';
import StepThree from './StepThree.js';



export default class Registration extends Component {
    render() {
        let step1;
        let step2;
        let step3;
        if (this.props.store.Registration[this.props.store.Registration.length-1] === 1) {
            step1 = <StepOne stepRegistration={this.props.stepRegistration} />;
        }else if (this.props.store.Registration[this.props.store.Registration.length-1] === 2) {
            step2 = <StepTwoo store={this.props.store} stepRegistration={this.props.stepRegistration} />;
        }else if (this.props.store.Registration[this.props.store.Registration.length-1] === 3) {
            step3 = <StepThree store={this.props.store} stepRegistration={this.props.stepRegistration} />
        }
        return(
            <div>
                <DownloadLine store={this.props.store}/>
                {step1}
                {step2}
                {step3}
            </div>
        );
    }
}

