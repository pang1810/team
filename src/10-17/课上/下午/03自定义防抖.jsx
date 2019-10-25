import React, { Component } from 'react'
import getBaidu from './index.js'
export default class Index extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			list: []
		}
		this.time = null;
	}
	// 修改input
	handleChange = event => {
		var value = event.target.value
		this.setState({
			input: value
		})
		// 请求接口
		if (this.time) {
			clearTimeout(this.time);
		}
		// 空值不请求
		if (value === '') {
			return false;
		}
		this.time = setTimeout(() => {
			getBaidu(value).then(data => {
				this.setState({
					list: data.s
				})
			})
		}, 1000)
	}
	// 渲染
	render() {
		return (
			<div>
				<input type="text" value={this.state.input} onChange={this.handleChange} />
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