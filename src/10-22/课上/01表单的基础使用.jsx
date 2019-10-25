import React, { Component } from 'react';
import './index.css'
/*	表单常用元素
	<input type="text" />
	<select name="" id=""></select>
	<textarea name="" id="" cols="30" rows="10"></textarea>
	<button></button>
	<input type="password" />
	<input type="checkbox" />
	<input type="redio" />
*/
class Index extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	//
	handleChange = event => {
		// ES5的写法
		// let state = {}
		// state[event.target.name] = event.target.value;
		// console.log(state);
		// this.setState(state);
		//ES6的写法---->计算属性
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		//
		const { username, password } = this.state
		return (
			<div>
				<h1>form表单</h1>
				<form action="" className={'form'}>
					<label>
						<input type="text" placeholder='用户名' name='username' value={username} onChange={this.handleChange} />
					</label>
					<label>
						<input type="password" placeholder='密码' name='password' value={password} onChange={this.handleChange} />
					</label>
					<label>
						<button type='button'>提交</button>
					</label>
				</form>
			</div>
		);
	}
}

export default Index;