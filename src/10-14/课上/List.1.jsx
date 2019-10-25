import React from 'react';

import PropTypes from 'propTypes';
export default class List extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				<li>当前留言信息条数为: {this.props.data.lenght}条</li>
				{this.props.data.map((item, index) => {
					return <li key={index}>{index + 1}.{item}</li>
				})}
			</ul>
		)
	}
}