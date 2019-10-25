import React from 'react';
//svg 它不是像素构成，它是线和颜色构成，优点：不会失真 缺点：颜色单一
import Son from './son';

export default class Index extends React.Component {
	render() {
		const imgs = [
			{
				src: require("./img/iPhone8.jpg"),
				$: '0',
				name: 'iPhone8',
				diss: '小张足浴店',
				count: '1'
			},
			{
				src: require("./img/roHUAWEI Mate30Pro.png"),
				$: '6299',
				name: 'Mate30Pro',
				diss: '华为旗舰店',
				count: '10万+'

			},
			{
				src: require("./img/Samsung Note10.jpg"),
				$: '6199',
				name: 'Note10',
				diss: '三星旗舰店',
				count: '1万+'
			},
			{
				src: require("./img/vivo NEX 3.jpg"),
				$: '5698',
				name: 'NEX 3',
				diss: 'vivo旗舰店',
				count: '10万+'
			}
		]
		return (
			<div className='flex'>
				{
					imgs.map((item, index) => {
						return <Son
							src={item.src}
							$={item.$}
							name={item.name}
							diss={item.diss}
							count={item.count}
							key={index}
						/>
					})
				}
			</div>
		)
	}
}