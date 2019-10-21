import React, { Component } from 'react';
import './index.css'
import { Menu, Dropdown, Icon } from 'antd';
import { Input } from 'antd';
import imgSrc from '.././img/logo.png';

const menu = (
    <Menu>
      <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">AE软件</a></Menu.Item>
      <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">AE插件</a></Menu.Item>
      <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">AE脚本</a></Menu.Item>
      <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">AE教程</a></Menu.Item>
      <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">AE模板</a></Menu.Item>
    </Menu>
  );
const menuTwo = (
    <Menu>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Adobe</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Autodesk</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Cinema 4D</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">达芬奇</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Edius</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Nuke</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">OFX</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Phonoshop</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Premiere</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">Vegas</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">其他软件插件</a></Menu.Item>
    </Menu>
);
const menuThree = (
    <Menu>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">视频素材</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">音乐配乐</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">音效SFX</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">作品样式</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">LUTs</a></Menu.Item>
        <Menu.Item><a target="_blank" rel="noopener noreferrer" href="#">4K UHD</a></Menu.Item>
    </Menu>
);
const { Search } = Input;

let Ae = '../join/AE.jsx'

class top extends Component {
    render() {
        return (
            <div>
                <div className="topBox">
                    <div className="top-centerBox">
                        <img src={imgSrc} alt="" />
                        <div className="listBox">
                            <ul>
                                <li className="onLi"><a href={'../join/home.jsx'}>首页</a> </li>
                                <Dropdown overlay={menu}><li><a href={Ae}>AE资源 ∨</a></li></Dropdown>
                                <li><a href="#">FCPX资源</a></li>
                                <li><a href="#">PR模板</a></li>
                                <li><a href="#">Mac专区</a></li>
                                <Dropdown overlay={menuTwo}><li><a href="#">软件插件 ∨</a></li></Dropdown>
                                <Dropdown overlay={menuThree}><li><a href="#">素材 ∨</a></li></Dropdown>
                                <li><a href="#">精品资源</a></li>
                                <li><a href="#">商城</a></li>
                            </ul>
                        </div>
                        <div className="searchBox">
                            <Search className='search' placeholder="输入关键字" onSearch={value => console.log(value)} enterButton />
                            <button className="login"><a href="#">登录/注册</a></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default top;