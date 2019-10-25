import React, { Component } from 'react';
// 引入 lodash
import _ from 'lodash';
import getBaidu from './jsonp';
export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			list: []
		};
		// 声明一个防抖函数
		this.handleDebounce = _.debounce(this.handleDebounce, 1000);
	}

	// 修改input
	handleChange = event => {
		let value = event.target.value;
		// 修改input
		this.setState({
			input: value
		});
		// 请求接口
		this.handleDebounce(value);
	};

	handleDebounce = value => {
		getBaidu(value).then(data => {
			this.setState({
				list: data.s
			});
		});
	};
	// 渲染
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.input}
					onChange={this.handleChange}
				/>
				{this.state.list.map(item => {
					return <p key={item}>{item}</p>;
				})}
			</div>
		);
	}
}
