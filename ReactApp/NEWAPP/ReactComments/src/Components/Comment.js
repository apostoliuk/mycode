import React, { Component } from 'react';
import firebase from 'firebase';
export default class Comment extends Component {
    removeComm(commId) {
        if(confirm('Are you really want to remove?')) {
            firebase.database().ref().child('comments').child(commId).remove();
        }
    }
    render() {
        return (
            <div className="contentcom">
                <h4>{this.props.author}</h4>
                <h3 onClick={this.removeComm.bind(this, this.props.id)} className="deleteComm">delete</h3>
                - {this.props.text}
            </div>
        );
    }
}
