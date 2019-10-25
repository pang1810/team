import React from 'react';
//无状态
export default props => {
    return (
        <div className='kaitou-diyihang'>
            <a href="##" className='tupian-box1'>
                <img src={require('./img/Adobe-CC-2019-Win-ALL.jpg')} width={props.width || '273.25'} height={props.height || '159.95'} alt='' />
            </a>
        </div>
    );
}