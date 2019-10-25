import React, { Component } from 'react';
import Input from './Input';
import List from './List';

export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			list: ['123123123']
		}
	}
	//修改input值
	setInput = (event) => {
		this.setState({
			input: event.target.value
		})
	}
	//添加
	addItem = () => {
		//不能直接修改state值
		this.setState({
			list: [...this.state.list, this.state.input],
			input: ''
		})
	}
	//渲染函数
	render() {
		//<></>是<React.Fragment></React.Fragment>的简写，但是<></>不能加key
		return (
			<>
				<Input value={this.state.input} setinput={this.setInput} additem={this.addItem} />
				<List data={this.state.list} />
			</>
		)
	}
}
