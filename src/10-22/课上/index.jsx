import React, { Component } from 'react';
import './index.css';
import { login } from './vif';
class Index extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	//改变input值
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	//提交验证
	handleSubmit = () => {
		let state = login(this.state);
		if (state) {
			return alert(state)
		} else {
			console.log('可以进行接口交互')
		}
	}
	//渲染
	render() {
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
						<button type='button' onClick={this.handleSubmit}>提交</button>
					</label>
				</form>
			</div>
		);
	}
}

export default Index;