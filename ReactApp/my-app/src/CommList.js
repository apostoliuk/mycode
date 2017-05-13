import React, { Component } from 'react';
import Comment from './Comment';
import CommTitle from './CommTitle';
import CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire'; 
import firebase from 'firebase';


let config = {
    apiKey: "AIzaSyCIgDL6ONz-e-aq8acqBX5LJYH3v5pZUgk",
    authDomain: "myappreact.firebaseapp.com",
    databaseURL: "https://myappreact.firebaseio.com",
    projectId: "myappreact",
    storageBucket: "myappreact.appspot.com",
    messagingSenderId: "18855119051"
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
         console.log( firebase.database().ref().child('comments') );
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
                                return <Comment author={comment.name} text={comment.text} key={index} />
                            })
            };
        return (
            <div className="comment">  
                <CommTitle counter={commentsCount}/>
                <CommentsToggle toggleComments={this.toogleShow.bind(this)} isShow={this.state.showComments}/>
                {comentList}
            </div>
        );
    }
}
ReactMixin(CommList.prototype, ReactFireMixin);