import React, { Component } from 'react';
import 'normalize.css';
import './reset.css'; 
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
// import UserDialog from './UserDialog';
import UserDialog from './UserDialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoList: []
    }
  }
  render() {
    // console.log(localStore.load('todoList'));
     let todos = this.state.todoList
       .filter((item)=> !item.deleted)
       .map((item,index)=>{
       return ( 
         <li key={index} >
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
        <UserDialog />
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
  componentDidUpdate() {
  }
}

export default App;

// let id = 0;

function idMaker(){
  // id = localStore.load('todoid') || id;
  // localStore.save('todoid',id+1);
  // console.log(localStore.load('todoid'));
  // // id += 1;
  // // console.log("id:" + id);
  // return id;
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&&0x3|0x8);
        return v.toString(16);
    });
}