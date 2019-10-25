import React, { Component } from 'react'
// 引入axios
import axios from 'axios'

export default class Index extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			list: []
		}
	}
	// 请求函数
	getBai = () => {
		// 定义一个接收jsonp返回值的函数m 
		window.baidu = {}
		window.baidu.sug = (data) => {
			// console.log(data)
			this.setState({
				list: data.s
			})
		}
		axios.get('api', {
			params: {
				wd: this.state.input
			}
		}).then(data => {
			if (data.status === 200) {
				// eval:将字符串的js代码变成真实的可执行的js代码
				eval(data.data);
			}
		})
	}
	// onChange函数
	handleChange = event => {
		// 修改input---异步修改
		this.setState({
			input: event.target.value
		})
		// 在react里state修改时异步的,所以在修改后立即获取是拿不到修改后的值的
		// 如何解决这种问题---> setState另外一种写法
		// 同步修改
		// event.persist();  // 去除合成事件,强制保留event对象的属性值
		// this.setState(() => {
		// 	return {
		// 		input: event.target.value
		// 	}
		// }, () => {
		// 	// 请求接口并赋值给list
		// 	getBaidu(this.state.input, data => {
		// 		this.setState({
		// 			list: data.s
		// 		})
		// 	})
		// })
	}
	render() {
		return <div>
			<input type="text" value={this.state.input} onChange={this.handleChange} />
			<button onClick={this.getBai}>搜索</button>
			<ul>
				{
					this.state.list.map((item, index) => {
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</div>
	}
}