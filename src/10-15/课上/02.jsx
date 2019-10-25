import React from 'react';

import getBaidu from '../api/jsonp跨域封装';
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
		getBaidu(this.state.input).then(data => {
			this.setState({
				list: data.s
			})
		});
	}
	//change事件
	handleChange = event => {
		this.setState({
			input: event.target.value
		})
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