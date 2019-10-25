import React from 'react';

export default class Child extends React.Component {
	render() {
		return <div>
			<h1>我是子组件</h1>
		</div>
	}
	//性能优化
	//组件加载完，请求接口
	componentDidMount() {
		//模拟一个轮询接口
		this.tiem = setInterval(() => {
			console.log('请求接口' + new Date().getTime());
		}, 1000);
	}
	//准备卸载
	componentWillUnmount() {
		clearInterval(this.tiem)
		console.log('准备卸载')
	}
}