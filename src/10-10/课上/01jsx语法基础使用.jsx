import React from 'react';
import './index.css';
/*
jsx语法对照createElement三个参数
*在react元素中使用关于js的任何东西(变量、注释、数组、对象....)都要放在{}内，此时{}表示的不是js的对象，而是表达式(js的运行环境)
*/
let divstyle = { color: 'blue', fontSize: '60px' };
export default () => {
	return <div className='box' style={divstyle}>{/*我是注释*/}我是jsx</div>;
}