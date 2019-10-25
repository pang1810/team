import React, { Component } from 'react'

import './index.css';

export default class Index extends Component {
    constructor(){
        super()
        this.state = {
            username:"",//用户名
            sex:"男",//性别
            phone:"",//电话
            email:"",//邮箱
            position:"",//职位
            resume:"",//简历
            live:[false,false,false],//爱好
            Location1:"1",//所在地1
            Location2:"1",//所在地2
            Location3:"1"//所在地3
        }
    }
    handleClick = ({ target }) => {
        let { name, value } = target
        let live =''
        if(name === 'live'){
            live = [...this.state[name]]
            live[value] = !live[value]
        }
        this.setState({
            [name]:name === 'live' ? live : value
        })
    }
    render() {
        const { username, sex, phone, email, position, resume, live, Location1, Location2, Location3 } = this.state
        return (
            <div >
                <form>
                    <label>
                        <span style={{marginRight:"30px"}}>姓名:</span>
                        <input className="textStyle" type="text" name='username' value={username} onChange = {this.handleClick} placeholder='请输入你的姓名'/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>性别:</span>
                        <span>男</span>
                        <input style={{marginRight:"20px"}} type="radio" checked={sex === '男'} name='sex' value='男' onChange = {this.handleClick}/>
                        <span>女</span>
                        <input type="radio" checked={sex === '女'} name='sex' value='女' onChange = {this.handleClick}/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>电话:</span>
                        <input className="textStyle" type="text" name='phone' value={phone} onChange = {this.handleClick} placeholder='请输入你的电话'/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>邮箱:</span>
                        <input className="textStyle" type="text" name='email' value={email} onChange = {this.handleClick} placeholder='请输入你的邮箱'/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>上传头像:</span>
                        <input type="file"/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>职位:</span>
                        <input className="textStyle" type="text" name="position" value={position} onChange = {this.handleClick} placeholder='请输入你的职位'/>
                    </label>
                    <label>
                        <span style={{marginRight:"30px"}}>个人简历:</span>
                        <textarea className="textStyle" name="resume" value={resume} onChange={this.handleClick} cols="30" rows="10" placeholder='请输入你的简介'/>
                    </label>
                    <React.Fragment>
                        <span style={{float:"left",marginRight:"20px"}}>爱好:</span>
                        {
                            live.map((item,index) => {
                                let name = ''
                                switch(index){
                                    case 0 :
                                        name = '写代码'
                                        break;
                                    case 1 :
                                        name = '解决bug'
                                        break;
                                    case 2 :
                                        name = '加班'
                                        break;
                                    default :
                                        name = ''
                                }
                                return(
                                    <label style={{float:"left"}} key={index}>
                                        { name }
                                        <input style={{marginRight:"20px"}}  type="checkbox" name='live' checked={item} value={index} onChange={this.handleClick}/>
                                    </label>
                                )
                            })
                        }
                    </React.Fragment>
                    <div style={{clear:"both"}}></div>
                    <label>
                        <span style={{marginRight:"20px"}}>所在地:</span>
                        <select style={{marginRight:"20px"}} name="Location1" value={Location1} onChange={this.handleClick}>
                            <option value="1">北京市</option>
                            <option value="2">南京市</option>
                            <option value="3">东京市</option>
                        </select>
                        <select style={{marginRight:"20px"}} name="Location2" value={Location2} onChange={this.handleClick}>
                            <option value="1">北京市辖区</option>
                            <option value="2">南京市辖区</option>
                            <option value="3">东京市辖区</option>
                        </select>
                        <select name="Location3" value={Location3} onChange={this.handleClick}>
                            <option value="1">东城区</option>
                            <option value="2">西城区</option>
                            <option value="3">北城区</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
