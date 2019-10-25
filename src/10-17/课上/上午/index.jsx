import React, { Component } from 'react'
// react里的事件,合成事件  react里的event对象;合成对象
export default class Index extends Component {
	// 点击事件
	// handleClick = event => {
	// 	/*
	// 	event对象常用的:清冒泡.禁止默认行为,获取元素[当前被触发的元素,事件所绑定的元素]、坐标值
	// 	react合成事件对象里有一个很重要的api，强制保留event对象属性值 event.persist()
	// 	*/
	// 	console.dir(event)
	// 	// 清除冒泡:必须显示的使用stopPropagation
	// 	event.stopPropagation()
	// 	// 禁止默认事件:preventDefault()
	// 	event.preventDefault()
	// 	// 获取被触发的元素
	// 	event.target
	// 	// 获取事件触发的元素
	// 	event.currentTarget
	// 	// 获取元素的event对象
	// 	event.natveEvent
	// }
	submit = event => {
		// 清除默认行为
		event.preventDefault();
		console.log('我被触发了')
	}
	// 事件1
	eventChild = event => {
		// 清除冒泡
		event.stopPropagation();
		console.log('我是事件1');
	}
	// 事件2
	eventP = event => {
		console.log('我是事件2');
	}
	// 渲染
	render() {
		// 在表单里的button按钮如果不指定类型,它默认就是submit
		// 那么submit按钮被点击后、就会触发表单的默认行为--自动提交
		return <div>
			<div onClick={this.eventP}>
				<h1>我希望有个如你一般的人</h1>
				<button onClick={this.eventChild}>点击我会触发冒泡事件</button>
			</div>
			<form onSubmit={this.submit}>
				<input type="text" name="username" />
				<button>提交</button>
			</form>
		</div>
	}
}