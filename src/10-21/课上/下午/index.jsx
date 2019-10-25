import React, { Component } from 'react';
import './index.scss'
//假数据：树形菜单数据
const data = [
	{
		id: 1, name: 'react', $: 10000, arr: [
			{ id: 10001, name: 'react视频教程', $: 8000 },
			{ id: 10002, name: 'react文字教程', $: 2000 },
		]
	},
	{
		id: 2, name: 'vue3.0', $: 2000, arr: [
			{ id: 20001, name: 'vue3.0源码', $: 1000 },
			{
				id: 20002, name: 'vue3.0视频', $: 1000, arr: [
					{ id: 2000201, name: '基础教程', $: 300 },
					{ id: 2000202, name: '高级教程', $: 700 }
				]
			}
		]
	}
]
class index extends Component {
	//递归查询数据，并修改class样式
	queryItem = id => {
		let arr = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === id) {
				if (data[i].class === 'hide') {
					data[i].class = 'show'
				} else {
					data[i].class = 'hide'
				}
			} else {
				data.arr && this.queryItem(id, data.arr)
			}
		}
	}
	setData = id => {
		//id和原数据
		this.queryItem(id, data)
		console.log(data);
		this.forceUpdate();
	}
	renderDom = data => {
		// let arr = [];
		return (
			<ul>
				{
					data.map((item) => {
						return (
							<li key={item.id} className={item.class} onClick={() => this.setData}>
								<p>{item.name}</p>
								{
									Array.isArray(item.arr) && this.renderDom(item.id)
								}
							</li>
						)
					})
				}
			</ul >
		)

		// return arr
	}
	render() {
		return (
			<div>
				{this.renderDom(data)}
			</div>
		);
	}
}

export default index;