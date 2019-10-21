import React from 'react';
//无状态
export default props => {
    return (
        <div className='tupianzhanshi'>
            <a href="##" className='tupian-box'>
                <img src={require('./img/AAF-Relinker.jpg')} width={props.width || '273.25'} height={props.height || '159.95'} alt='' />
            </a>
            <h2>
                <a href="##" >{props.name || '--'}</a>
            </h2>
            <footer>
                <a href="##">
                    <img src={props.pht||require('./img/TB1WT_ufUT1gK0jSZFrooUNCXXa_115032.jpg')} alt=""/>
                    <span>0</span>
                </a>
                <time>{props.time}</time>
                <span className='post-view'>阅读(96)</span>
                <span className='post-show'>评论(0)</span>
            </footer>
        </div>
    );
};