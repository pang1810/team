//强制更信合xinnengyohuazujian
import React from 'react';

export default class Chlid extends React.Component {
	//拦截
	shouldComponentUpdate() {
		return false;
	}
	render() {
		console.log('更新了')
		return (
			<div>
				<h1>我是强制更新的组件</h1>
			</div>
		)
	}
}