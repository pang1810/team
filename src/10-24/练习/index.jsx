import React, { Component } from 'react';
import './index.css'
import Text from './son/text';
import Left from './son/left';
import Right from './son/right'

class index extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }
    handleChange = inPut => {
        this.setState = {
            text: inPut.target.value
        }
    }

    render() {
        return (
            <div className="box">
                <Text value={this.state.text} onChange={this.handleChange}/>
                <Left value = {this.state.text}/>
                <Right value = {this.state.text}/>
            </div>
        );
    }
}

export default index;