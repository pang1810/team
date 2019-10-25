import React, { Component } from 'react';
import "./bottom.css";
import { Pagination } from 'antd';
class bottom extends Component {
    
    render() {
        
        return (
            <div>
                <div className="bigbox">
                    <div className="small">
                    <ul className="wenzi">
                        
                        <li>友情链接:</li>
                        <li>FCPX资源站</li>
                        <li>AE模板</li>
                        <li>FCPX插件</li>
                        <li>狐狸影视城</li>
                        <li>92素材网</li>
                        <li>C4D之家</li>
                        <li>CGJOY在线课堂</li>
                    </ul>
                    <br/>
                    <ul className="erbufen">
                        <li>7天热门</li>
                        <li>30天热门</li>
                        <li>热门标签</li>
                        <li>点赞排行</li>
                        <li>官方淘宝店铺</li>
                        <li>大众脸网盘资源</li>
                        <li>免责声明DMCA</li>
                        <li>我的订单</li>
                        <li>我的收藏</li>
                    </ul>
                    <br/>
                  <a className="box2">© 2019   LookAE.com  蜀ICP备19020289号-1     </a>
                    <a className="box1">51La</a>
                    <a className="box3">联系邮箱：85578335@qq.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default bottom;
