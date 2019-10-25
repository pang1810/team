//高阶组件定义， 它是为了复用逻辑
//当有很多个组件都是同样逻辑功能时候
import React from 'react';
import Hoc from './hoc';

export default class Index extends React.Component {
	constructor() {
		//高阶组件必须在constructor实例化
		super();
		this.Hoc = Hoc(() => {
			return <div>我是一个高阶组件</div>
		})
	}
	render() {
		return <div>
			<this.Hoc></this.Hoc>
		</div>
	}
}