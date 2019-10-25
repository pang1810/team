import React from 'react';

//class组件为什么继承React.Component：1.会丢失很多react特性
export default class Index extends React.Component {
	constructor() {
		super();
		//状态：组件自身的存数据的
		//state必须是一个对象
		this.state = {
			name: '大碗宽面'
		}
	}
	//相当于写在原型对象上，在使用的时候也是用this点出来的
	myname = '我是class原型对象上的属性';
	//渲染函数
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h2>{this.myname}</h2>
			</div>
		)
	}
}