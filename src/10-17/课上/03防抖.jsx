import React, { Component } from 'react';
import getBidu from './jsonp';
class index extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			list: []
		}
		//定时器
		this.time = null;
	}
	//修改input
	handleChange = event => {
		let value = event.target.value;
		this.setState({
		})
		//请求接口
		if (this.time) {
			clearTimeout(this.time)
		}
		//空值不请求
		if (value === '') {
			return false;
		}
		this.time = setTimeout(() => {
			getBidu(value).then(data => {
				this.setState({
					list: data.s
				})
			})
		}, 100);
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.input} onChange={this.handleChange} />
				{
					this.state.list.map(item => {
						return <p key={item}>{item}</p>
					})
				}
			</div>
		);
	}
}

export default index;