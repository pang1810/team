// prueComponent
import React from 'react';

export default class Pure extends React.PureComponent {
	render() {
		console.log('没有任何属性和状态的组件')
		return (
			<div>
				<h1>我是优化出来的</h1>
			</div>
		)
	}
}