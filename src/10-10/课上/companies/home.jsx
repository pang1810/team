import React from 'react';
//props:属性
//无状态组件，只有一个props，其他的react特性没有
export default props => {
	console.log(props)
	/*
	props.children 当有一堆子元素的时候，它是一个集合，单独的使用它
	这种方式叫：隐式渲染
	显式渲染：需要使用顶级API：React.children.map()方法
	该方法有两个参：
	第一个参数是遍历的数组[props.children]
	第二个参数是一个回调函数，是对每一项子元素做处理的
	针对遍历出来的子元素，做克隆，然后对克隆出来的元素做处理，顶级API：React.cloneElement();
	语法：三个参数：第一个参数是要被克隆的元素，第二个参数是属性，第三个参数是内容/子元素

	*/
	return (
		<div>
			<h1>{
				React.Children.map(props.children, function (item, index) {
					console.log(item);
					//对每一个遍历出来的子元素做克隆处理
					let newItem = React.cloneElement(item, {}, index)
					return item;
				})
			}</h1>
		</div>
	)
}