import React from 'react';
//组件：1、无状态组件
//组件的声明
function Home() {
	//组件的返回值
	//createElement方法 创建虚拟DOM的，它有三个参数
	//1、原生dom的类型
	//2、原生dom的属性
	//3、dom元素的内容(也可以是子元素)
	return React.createElement('div', {}, React.createElement('div', {}, 'div中的div'));
}
//导出组件
export default Home;