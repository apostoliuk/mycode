import React, { Component } from 'react';
import './index.css';
import CommList from './CommList';
import FormComm from './FormComm';
//import firebase from 'firebase';


export default class App extends Component {
   
    render() {
        return (
            <div>
                <FormComm />
                <CommList />
             </div>
        );
    }
}
