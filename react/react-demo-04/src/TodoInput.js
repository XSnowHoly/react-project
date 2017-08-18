import React, { Component } from 'react';
import './TodoInput.css'

export default class TodoInput extends Component {
	render() {
		return <input className='Todo-input' type="text" value={this.props.content}
			onChange={this.changeTitle.bind(this)}
			onKeyPress={this.submit.bind(this)}/>
	}
	submit(e) {
		if (e.key === 'Enter') {
			if (!this.props.content) { return;} //数据为空不触发添加todo
			this.props.onSubmit(e);
		}
	}
	changeTitle(e) {
		this.props.onChange(e);
	}
}