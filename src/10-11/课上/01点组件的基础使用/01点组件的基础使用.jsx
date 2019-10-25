import React from 'react';
import Son from './son';

export default class Index extends React.Component {
	//点组件：一个对象有属性是组件，用对象点属性
	render() {
		return <React.Fragment>
			<Son type='div' text="我是一个div" />
			<Son type='h1'>元素</Son>
			<Son type='p' />
			<Son />
		</React.Fragment>
	}
}