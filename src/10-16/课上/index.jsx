//强制更信合xinnengyohuazujian
import React from 'react';
import Chlid from './chlid';
import Pure from './Pure';
export default class Index extends React.Component {
	myForceUptate = () => {
		this.forceUpdate();
	}
	constructor() {
		super();
		this.state = {
			is: false
		}
	}
	//修改状态
	handleclick = () => {
		this.setState({
			is: !this.state.is
		})
	}
	render() {
		return (
			<div>
				<Chlid />
				<Pure />
				<button onClick={this.myForceUptate}>强制更新</button>
				<button onClick={this.handleclick}>修改状态</button>
			</div>
		)
	}
}