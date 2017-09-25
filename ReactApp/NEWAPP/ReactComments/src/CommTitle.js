import React, { Component } from 'react';

export default class CommTitle extends Component {
    getComm(commentsCounter) {
            if(commentsCounter === 0) {
                return  'No comments yet';
            }else if(commentsCounter === 1) {
                return '1 comment';
            }else {
                return commentsCounter + ' coments';
            }
        }
    render() {
        return (
           <p>
             {this.getComm(this.props.counter)}
           </p>
        );
    }
}
