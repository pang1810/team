import React from 'react';
//class声明关键字 Index类的名字 extends继承 React.Component基类
//派生类：继承了其他的类而得到的类
class Index extends React.Component {
	//构造函数
	constructor() {
		//派生类里的constructor必须使用超级函数
		//在派生类里super方法是用来实例化基类的构造函数,从而得到自己的this
		super();
		this.name = '瓦坎达'
	}
	//渲染函数
	render() {
		return <div>
			<h1>我是一个class组件{this.name}</h1>
		</div>
	}
}
//导出组件
export default Index;