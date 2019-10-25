import React from 'react';

import getBaidu from './api';
export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			list: []
		}
	}
	//点击事件
	handleClick = () => {
		getBaidu('right', (data) => {
			console.log(data.s)
		});
	}
	//change事件
	handleChange = event => {
		//修改input
		// this.setState({
		// 	input: event.target.value
		// })
		//react里state修改是异步的，所以在修改后立即获取是拿不到修改后的值
		//如何解决这个问题---> setState另外一个语法
		//同步的
		event.persist();//去除合
		this.setState(() => {
			return {
				input: event.target.value
			}
		}, () => {
			//请求接口，并渲染list
			getBaidu(this.state.input, data => {
				this.setState({
					list: data.s
				})
			})
		});
		console.log(this.state.input)
	}
	render() {
		return (
			<div>
				<input type="text" name="" value={this.state.input} onChange={this.handleChange} />
				<button onClick={this.handleClick}>搜索</button>
				<ul>
					{
						this.state.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		)
	}
}