import React, { Component } from 'react'

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valuesFirst: 0,
            valuesSecond: 0,
            result: 0
        };
    }

    inputChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;

        this.setState({
            [name]: value
        })
    }

    addClickHandle = () => {
        this.setState(state => ({
            result: +state.valuesFirst + +state.valuesSecond
        }))
    }

    minusClickHandle = () => {
        this.setState(state => ({
            result: state.valuesFirst - state.valuesSecond
        }))
    }

    multiClickHandle = () => {
        this.setState(state => ({
            result: state.valuesFirst * state.valuesSecond
        }))
    }

    divideClickHandle = () => {
        this.setState(state => ({
            result: state.valuesFirst / state.valuesSecond
        }))
    }

    render() {
        return (
            <div>
                <div className='m-2'>
                    <input onChange={this.inputChange} name='valuesFirst' type="number" />
                </div>
                <div className='m-2'>
                    <input onChange={this.inputChange} name='valuesSecond' type="number" />
                </div>
                <div className='m-2'>result: {this.state.result}</div>
                <div className='d-flex'>
                    <button onClick={this.addClickHandle} className='mx-2'>+</button>
                    <button onClick={this.minusClickHandle} className='mx-2'>-</button>
                    <button onClick={this.multiClickHandle} className='mx-2'>*</button>
                    <button onClick={this.divideClickHandle} className='mx-2'>/</button>
                </div>
            </div>
        )
    }
}
