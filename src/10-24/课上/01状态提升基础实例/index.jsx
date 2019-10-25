import React, { Component } from 'react';
import A from './A';
import B from './B';

class index extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }
    //修改input
    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }
    //渲染
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this}/>
                <A text={this.state.text} handleChange={this.handleChange}/>
                <B />
            </div>
        );
    }
}

export default index;