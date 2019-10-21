import React, { Component } from 'react';
//引入头部路径
import Top from '../topList/top';
// 引入轮播部分
import Home from '../10-18work/HOME';
// 引入商品部分
import Shop from '../shopList/main/index';
//引入底部部分
import Bottom from '../bottom/bottom';

class index extends Component {
    render() {
        return (
            <div>
                <Top />
                <Home />
                <Shop />
                <Bottom />
            </div>
        );
    }
}

export default index;