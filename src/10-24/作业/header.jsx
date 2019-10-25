import React from 'react';
import './index.css'

export default props => {
    return (
        <div className="top">
            <div className='colorBtn'>
                <span style={{float:'left',lineHeight:"100px"}}>默认样式：</span>
                <div onClick={() => props.settheme('red')} className='red'></div>
                <div onClick={() => props.settheme('blue')} className='blue'></div>
                <div onClick={() => props.settheme('pink')} className='pink'></div>
                <span style={{float:'left',lineHeight:"100px"}}>动态颜色：</span>
                <span style={{lineHeight:"100px"}}>背景：</span>
                <input type="color"/>
                <span style={{lineHeight:"100px"}}>color：</span>
                <input type="color"/>
            </div>
        </div>
    )
}