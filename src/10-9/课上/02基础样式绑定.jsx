import React from 'react';
import './index.css'
//组件：1、无状态组件
//组件的声明
function Home() {
	//组件的返回值
	//createElement方法 创建虚拟DOM的，它有三个参数
	//1、原生dom的类型
	//2、原生dom的属性
	//3、dom元素的内容(也可以是子元素)
	//如果在元素内需要创建多个子元素，那么第三个参数用数组
	return [
		React.createElement('div', { key: 1, className: 'red', title: "大碗宽面" }, 'div中的div'),
		React.createElement('p', { key: 2, className: 'blue' }, 'div中的p')
	]
}
//导出组件
export default Home;