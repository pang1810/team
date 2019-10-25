import React, { Component } from 'react';
//闭包，
function fn() {
	let a = 1;
	return function () {
		return a++;
	}
}
const f1 = fn();
console.log(f1())
class index extends Component {
	render() {
		return (
			<div>

			</div>
		);
	}
}

export default index;