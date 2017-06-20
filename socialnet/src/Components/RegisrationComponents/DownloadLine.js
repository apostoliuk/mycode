import React, { Component } from 'react';

export default class DownloadLine extends Component {
    render(){
        let line1;
        let line2;
        let line3;
        if (this.props.store.Registration[this.props.store.Registration.length-1] === 1) {
            line1 = <div className="line1"></div>;
        }else if (this.props.store.Registration[this.props.store.Registration.length-1] === 2) {
            line1 = <div className="line1"></div>;
            line2 = <div className="line2"></div>;
        }else if (this.props.store.Registration[this.props.store.Registration.length-1] === 3) {
            line1 = <div className="line1"></div>;
            line2 = <div className="line2"></div>;
            line3 = <div className="line3"></div>;
        }
        return(
            <div className="download-line">
                {line1}
                {line2}
                {line3}
            </div>
        );
    }
}     
        