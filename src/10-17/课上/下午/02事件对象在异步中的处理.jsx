import React, { Component } from 'react'

export default class Index extends Component {
	constructor() {
		super()
		this.state = {
			input: ''
		}
	}
	// 区分一下:被触发的元素和绑定的元素
	// 异步中的event表现和处理办法
	handleClick = event => {
		// event.persist() 强制去除合并事件,保留属性值
		event.persist()
		var value = event.target.value;
		// 切记：event对象只要在异步的方法里就会丢失属性值  
		setTimeout(() => {
			this.setState({
				input: value
			})
		}, 1000);
		// event.target 他是不固定的,它表示被触发的元素
		// event.currentTarget 它是固定的,它表示事件所绑定的元素
		// console.log(event.currentTarget)
	}
	// 渲染
	render() {
		return (
			<div>
				<input type="text" value={this.state.input} onChange={this.handleClick} />
			</div>
		)
	}
}