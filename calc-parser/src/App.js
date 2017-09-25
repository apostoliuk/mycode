import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
﻿  constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
        this.position = 0;
        this.parser = this.parser.bind(this);
        this.getToken = this.getToken.bind(this);
        this.popOperation = this.popOperation.bind(this);
        this.orCanPop = this.orCanPop.bind(this);
        this.priority = this.priority.bind(this);
        this.power = this.power.bind(this);
        this.getDoubleValue = this.getDoubleValue.bind(this);
    }
    parser(exp) {
        let expression = `(${exp.replace(/\s+/g, '')})`;
        let stackNumbers = [];
        let stackTokens = [];
        let currentToken = '';
        let previousToken = '.';
        let position = 0;

        do {
            currentToken = this.getToken(expression, this.position);
            if (typeof currentToken === 'number') {
                stackNumbers.push(currentToken);
            }else if (typeof currentToken === 'string') {
                if (currentToken===')') {
                    while (stackTokens.length>0 && stackTokens[stackTokens.length-1]!=='(') {
                        this.popOperation(stackNumbers, stackTokens);
                    }
                    stackTokens.pop();
                }else {
                    while (this.orCanPop(currentToken, stackTokens)) {
                        this.popOperation(stackNumbers, stackTokens);
                    }
                    stackTokens.push(currentToken);
                }
            }
            // this.position++;
            previousToken = currentToken;
        }while (currentToken !== null);

        return stackNumbers.pop()
    }


    getToken(exp, pos) {
        if (pos===exp.length) {return null}
        if (!isNaN(exp[pos])) {
            let num = +this.getDoubleValue(exp);
            console.log(typeof num);

            return num;
        }
        else if (isNaN(exp[pos])) {
            this.position++;
            return exp[pos];
        }
    }

    getDoubleValue(exp) {
        let result = '';
        while (this.position < exp.length && !isNaN(exp[this.position]) || exp[this.position]==='.') {
            result += exp[this.position++];
        }
        return result;
    }

    priority(tok) {
        switch (tok) {
            case '(': return -1;
            case '*': return 1;
            case '/': return 1;
            case '^': return 1;
            case '+': return 2;
            case '-': return 2;
            default: alert('Недоступна операція!!!');
        }
    }

    orCanPop(tok, operating) {
        if (operating.length === 0) {return false}
        let _firstPriority = this.priority(tok);
        let _secondPriority = this.priority(operating[operating.length-1]);
        return _firstPriority >=0 && _secondPriority >= 0 && _firstPriority >= _secondPriority;
    }

    popOperation(numbers, tokens) {
        let _lastToken = numbers.pop();
        let _secondLastToken = numbers.pop();

        console.log(_secondLastToken, _lastToken);

        switch (tokens.pop()) {
            case '+': numbers.push(_secondLastToken + _lastToken);
                break;
            case '-': numbers.push(_secondLastToken - _lastToken);
                break;
            case '*': numbers.push(_secondLastToken * _lastToken);
                break;
            case '/': numbers.push(_secondLastToken / _lastToken);
                break;
            case '^': numbers.push(this.power(_secondLastToken, _lastToken));
                break;
            default:break;
        }
    }

    power(x, n) {
        if (n !== 1) {
            return x * this.power(x, n - 1);
        } else {
            return x;
    }
    }

    componentDidMount() {
    this.setState({
        result: this.parser('(10.1/10)*2')
    });


    }
    render() {
    return (
        <div className="wrapper">
            <section className="calc-wrapper">
                <input className="input-field" type="text" value={this.state.result} disabled ref={input => this.input = input}/>
                <div className="buttons-wrapp">
                    <div className="number-button">1</div>
                    <div className="number-button">2</div>
                    <div className="number-button">3</div>

                    <div className="number-button">+</div>

                    <div className="number-button">4</div>
                    <div className="number-button">5</div>
                    <div className="number-button">6</div>

                    <div className="number-button">-</div>

                    <div className="number-button">7</div>
                    <div className="number-button">8</div>
                    <div className="number-button">9</div>

                    <div className="number-button">*</div>

                    <div className="number-button">0</div>
                    <div className="number-button">.</div>
                    <div className="number-button">/</div>

                    <div className="number-button">^</div>

                </div>

            </section>
        </div>
    );
  }
}

export default App;
