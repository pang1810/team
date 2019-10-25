import React from 'react';
import './index.css'
//
import Header from './clids/header';
import Main from './clids/main';
import Footer from './clids/footer';

export default () => {
	//在react凡是手写字母大写的元素/标签，都是自定义组件
	//凡是小写的都是原生DOM
	let el = React.createElement;
	return el('div', { className: 'wrap' }, [
		<Header key='1' />,
		<Main key='2' />,
		<Footer key='3' />
	])
};
