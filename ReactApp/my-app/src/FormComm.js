import React, { Component } from 'react';

export default class FormComm extends Component {
    render() {
        return (
            <div id="wrapper" className="wrapper">
                <form className="main-form">
                    <p>NAME</p>
                    <input type="text" id="name" />
                    <p>COMMENT</p>
                    <textarea name="comment" form="main-form" id="comm"></textarea>
                    <div className="passcoment">POST COMENT</div>
                </form>
            </div>
        );
    }
}