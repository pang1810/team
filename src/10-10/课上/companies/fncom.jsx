import React from 'react';
//es6 解构有两种：一种是数组 一种是对象
//对象的解构
let obj = {
	name: '宇飞',
	age: 12
}
//obj.name()||obj[name]
let { name, gae } = obj;//对象的解构
console.log(name, age)
let arr = [100, 200, 300];

export default props => {
	return (
		<React.Fragment>
			{
				React.Children.map(props.children, (item, index) => {
					let newItem = React.cloneElement(item, { className: props.className });
					return newItem;
				})
			}
		</React.Fragment>
	)
}