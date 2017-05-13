import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className="contentcom">
                <h4>{this.props.author}</h4>
                <h3>delete</h3>
                - {this.props.text}
            </div>
        );
    }
}
