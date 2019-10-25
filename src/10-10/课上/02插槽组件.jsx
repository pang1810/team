import React from 'react';
import './index.css';
import Home from './companies/home';
import Child from './companies/child';

export default () => {
	return <Home myname='Home'>
		<Child />
		<Child />
		{/* <div>大碗宽面</div>
		<p>你看这个碗，它又大又圆。</p>
		<mark>你看这个面，它又长又宽。</mark> */}
	</Home>
}