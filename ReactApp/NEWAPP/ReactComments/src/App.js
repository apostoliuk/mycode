import React, { Component } from 'react';
import './index.css';
import CommList from './CommList';
import FormComm from './FormComm';
import { createStore } from 'redux';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire'; 
import * as firebase from 'firebase';

const store = createStore(commentsStore);

function commentsStore(state = [], action) {
    if(action.type === 'COMMLOADER') {
        return [
            ...state,
            action.payload
        ]
    }
}

store.subscribe(() => console.log('store changed', store.getState()));

store.dispatch({
    type: 'COMMLOADER',
    payload: true
});

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            commLoader: []
        }
    }
    componentDidMount(){
       this.bindAsArray(firebase.database().ref().child('comments'), 'commLoader');
    }

    render() {
        let Formm;
        let Commm;
        if(this.state.commLoader.length || this.state.commLoader[0]) {
            Formm = <FormComm /> 
            Commm = <CommList />
        }
        return (
            <div>
                {Formm}
                {Commm}
             </div>
        );
    }
}
ReactMixin(App.prototype, ReactFireMixin);