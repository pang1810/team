import React from 'react';

export default (props) => {
	//alt 写关键字网页爬虫
	return <div>
		<img
			src={props.src || require('./img/default.jpg')}
			width={props.width || '210'}
			height={props.height || '210'}
			alt="产品"
		/>
		<p>{props.$ || '0.00'}元</p>
		<p>{props.name || '--'}</p>
		<p>{props.diss || '--'}</p>
		<p>{props.count || '0'}</p>
	</div>
}