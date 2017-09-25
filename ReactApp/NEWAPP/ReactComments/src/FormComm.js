import React, { Component } from 'react';
import firebase from 'firebase';
export default class FormComm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classN: 'comm',
            className: 'name'
        }
    }
    addClass() {
       console.log('add class');
    }
    submitForm(event) {
        event.preventDefault();
        
        if(this.authorComm.value.length && this.textComm.value.length) {
            const commm = {
                name: this.authorComm.value,
                text: this.textComm.value
            }
            this.setState({classN: 'comm'});
            this.setState({className: 'name'});
            
            firebase.database().ref().child('comments').push(commm).then(
                () => {
                    this.authorComm.value = '';
                    this.textComm.value = '';
                }
            )
        }
        if(this.textComm.value.length == false) {this.setState({classN: 'classArea'})}
        if(this.authorComm.value.length == false) {this.setState({className: 'newName'})}
        


    }
    render() {
        return (
            <div id="wrapper" className="wrapper">
                <form className="main-form">
                    <p>Name</p>
                    <input type="text" className={this.state.className} name="name" ref={input => this.authorComm = input} />
                    <p>COMMENT</p>
                    <textarea name="comment" className={this.state.classN} form="main-form" id="comm"ref={textarea => this.textComm = textarea} />
                    <div type="submit" onClick={this.submitForm.bind(this)} id="comment" className="passcoment">POST COMMIT</div>
                </form>
            </div>
        );
    }
}