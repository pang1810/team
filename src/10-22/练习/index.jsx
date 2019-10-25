import React, { Component } from 'react';
import '../课上/index.css';
import { register } from './vif';
class index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      rpassword: ''
    };
  }
  //   受控组件
  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //   点击注册
  handleReg = () => {
    let state = register(this.state);
    if (state) {
      return alert(state);
    } else {
      console.log('可以进行后端请求注册了');
    }
  };
  render() {
    return (
      <div>
        <h1>注册账号</h1>
        <form className="form">
          <label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="请输入注册账号"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="rpassword"
              placeholder="请输入重复密码"
              value={this.state.rpassword}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <button type="button" onClick={this.handleReg}>
              注册
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default index;
