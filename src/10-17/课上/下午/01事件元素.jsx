import React, { Component } from 'react'

export default class Index extends Component {
	constructor() {
		super()
	}
	// 区分一下:被触发的元素和绑定的元素
	// 异步中的event表现和处理办法
	handleClick = event => {
		setTimeout(() => {
			this.setState({
				input: event.target.value
			})
		}, 100);
		// event.target 他是不固定的,它表示被触发的元素
		// event.currentTarget 它是固定的,它表示事件所绑定的元素
		// console.log(event.currentTarget)
	}
	// 渲染
	render() {
		return (
			<div><input type="text" value={this.state.input} onChange={this.handleClick} />
			</div>
		)
	}
}