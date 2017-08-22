import React, { Component } from 'react';
import './UserDialog.css';
export default class UserDialog extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selected: 'sigUp'
    };
  }

  switch(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render(){
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav onChange={this.switch.bind(this)}>
            <input type="radio" value="signUp" checked={this.state.selected === 'signUp'} /> 登录
            <input type="radio" value="signIn" checked={this.state.selected === 'signIn'} /> 注册
          </nav>
          <div className="panes">
            <form className="signUp"> 
              <div className="row">
                <label>用户名</label> 
                <input type="text"/>
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password"/>
              </div>
              <div className="row actions">
                <button type="submit">注册</button>
              </div>
            </form>
            <form className="signIn">
              <div className="row">
                <label>用户名</label>
                <input type="text"/>
              </div>
              <div className="row">
                <label>密码</label>
                <input type="password"/>
              </div>
              <div className="row actions">
                <button type="submit">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
   }
 }