import React, { Component } from 'react';
import Header from './header'
import './index.css'

const themes = {
    red: 'red',
    blue: 'blue',
    pink: 'pink'
}

class index extends Component {
    constructor(){
        super()
        this.state = {
            theme: ''
        }
    }

    handleClick = theme => {
        window.localStorage.setItem('theme',theme);
        this.setState({
            theme
        })
    }

    handleChange = fontColor => {
        
    }

    render() {
        let { theme } = this.state
        return (
            <div>
                <Header settheme={this.handleClick} theme={theme}/>
                <div style={{background: this.state.theme}}  className="box">
                    <h1 onChange='handleChange'>This is main title</h1>
                </div>
            </div>
        );
    }   
}

export default index;