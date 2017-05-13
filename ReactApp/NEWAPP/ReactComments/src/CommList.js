import React, { Component } from 'react';
import Comment from './Comment';
import CommTitle from './CommTitle';
import CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire'; 
import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAZHV5dRtD26iuVT3Lh7DDyUlXQFOFADMk",
    authDomain: "newnew-6c8d4.firebaseapp.com",
    databaseURL: "https://newnew-6c8d4.firebaseio.com",
    projectId: "newnew-6c8d4",
    storageBucket: "newnew-6c8d4.appspot.com",
    messagingSenderId: "811543154241"
  };
  firebase.initializeApp(config);

export default class CommList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComments: true,
            comments: []
        }
    }
    
    componentDidMount(){
       this.bindAsArray(firebase.database().ref().child('comments'), 'comments');
    }


    toogleShow() {
        this.setState({
            showComments : !this.state.showComments,  
        });
    } 
    render() {
        const commentsCount = this.state.comments.length;
        let comentList;
        if(commentsCount > 0 && this.state.showComments) {
        comentList = this.state.comments.map((comment, index) => {
                            return <Comment author={comment.name} text={comment.text} key={index} id={comment['.key']}/>
                        });

        };
        let yetComm; 
        if(commentsCount > 0) {
            yetComm = <CommentsToggle toggleComments={this.toogleShow.bind(this)} isShow={this.state.showComments} />
        }

        return (
            <div className="comment">  
                <CommTitle counter={commentsCount} />
                {yetComm}
                {comentList}
            </div>
        );
    }
}
ReactMixin(CommList.prototype, ReactFireMixin);
