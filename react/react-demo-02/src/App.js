import React, { Component } from 'react';
// import logo from './logo.svg';
// import logo2 from './logo2.jpg';
// import friend from './null.jpg';
import 'normalize.css';
import './reset.css'; 
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoList: []
    };
  }
  render() {
    let todos = this.state.todoList
      .filter((item)=> !item.deleted)
      .map((item,index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>
        </li>
      )
    })


    return (
      <div className="App">
        <div className="App-header">
          <h1>To Do List</h1>
        </div>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} 
            onChange={this.changTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>  
    )
  }

  delete(event, todo) {
    todo.deleted = true;
    this.setState(this.state);
  }
  toggle(event, todo) {
    todo.status = todo.status === 'completed' ? '': 'completed';
    this.setState(this.state);
  }

  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
}

export default App;

let id = 0;

function idMaker(){
  id += 1;
  return id;
}