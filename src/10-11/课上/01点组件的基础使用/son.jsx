import React from 'react';

export default (props) => {
	console.log(props);
	//点组件优点就是特别灵活
	let Type = props.type || 'div';
	return <Type>{props.children || props.text || '默认值'}</Type>
}	