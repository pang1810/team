//快速生成rcc
import React, { Component } from 'react';

class index extends Component {
	constructor() {
		super();
		this.state = {
			name: 'ss'
		};
		//解决es6声明函数的
		this.handleClick01 = this.handleClick01.bind(this);
	}
	//handleClick
	handleClick = () => {
		//优先使用的函数声明方式
		//它的好处在于，我们的this指向是当前环境的对象
		//箭头函数自身没有this，它会逐级向上找this，找到后拿过来
		console.log(this)
	}
	//常规：class内部的方法
	handleClick01() {
		//这种es6的函数声明方法，在
		console.log(this)
	}
	//渲染
	render() {
		return (
			<div>
				<button onClick={this.handleClick01}>点击</button>
			</div>
		);
	}
}

export default index;