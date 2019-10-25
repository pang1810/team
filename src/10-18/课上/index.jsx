import React, { Component } from 'react';

import Home from './pages/home';
import News from './news';
import About from './pages/about';

class index extends Component {
	constructor() {
		super();
		let has = window.location.hash.substr(1)
		this.state = {
			page: has || 'home'
		};
		//常量字典值
		this.DICT = {
			HOME: 'home',
			NEWS: 'news',
			ABOUT: 'about'
		};
		console.log('我是准备挂载得钩子函数')
	}
	//改变state
	changeState = name => {
		this.setState({
			page: name
		})
		//修改地址栏得hash值
		window.location.hash = name;
	}
	//渲染
	render() {
		const { HOME, NEWS, ABOUT } = this.DICT
		let myCom = <Home />
		switch (this.state.page) {
			case HOME:
				myCom = <Home />
				break
			case NEWS:
				myCom = <News />
				break
			case ABOUT:
				myCom = <About />
				break
		}
		return (
			<div>
				<div>
					<button onClick={() => this.changeState(HOME)}>首页</button>
					<button onClick={() => this.changeState(NEWS)}>新闻</button>
					<button onClick={() => this.changeState(ABOUT)}>关于</button>
				</div>
				{myCom}
			</div>
		);
	}
}

export default index;