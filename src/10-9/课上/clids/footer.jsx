import React from 'react';
export default () => {
	let el = React.createElement;
	return el('footer', { key: '底部', className: 'footer' }, '底部')
};
