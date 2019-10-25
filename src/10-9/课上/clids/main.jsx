import React from 'react';
export default () => {
	let el = React.createElement;
	return el('main', { key: '中间区', className: 'main' }, '中间区')
};
