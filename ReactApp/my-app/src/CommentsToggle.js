import React, { Component } from 'react';


export default class CommentsToggle extends Component {  
  
    render() {
        return (
             <div className="button" onClick={this.props.toggleComments}>
                 {this.props.isShow ? 'HIDE' : 'SHOW'} COMENTS
             </div>
        );
    }
}