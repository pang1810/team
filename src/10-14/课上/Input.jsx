import React from 'react';

export default props => {
	return <>
		<input type="text" value={props.value} onChange={props.setInput} />
		<button>提交</button>
	</>
}