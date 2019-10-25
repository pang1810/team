import React, { Component } from 'react';
//百分百非受控组件：<input type="file" />
class index extends Component {
    constructor(){
        super()
        this.state = {
            select: '',
            radio: '1',
            textarea: '',
            checkbox: [false,true,false],
            input: ''
        }
    }
    handleChange = ({ target }) => {
        let {name, value}
    }
    render() {
        const {select.radio,textarea,checkbox,input} = this.state;
        return (
            <div>
                <form>
                    <label>
                        <input type="text" name='input' value={input}  onChange={this.handleChange}/>
                    </label>
                    <label>
                        <textarea 
                        name="textarea" 

                        >

                        </textarea>
                    </label>
                </form>
            </div>
        );
    }
}

export default index;