import React, { Component } from 'react';
import TodoInput from './Todo-Input';

let todos = [];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {todos};

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos:this.state.todos.filter((e,i)=>{
        return i !== index;
      })
    })
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }


  render() {
    return (
      <div className='container'>
        <TodoInput onAddTodo={this.handleAddTodo}/>
        <h4>Todo Count: <span className='badge'>{this.state.todos.length}</span></h4>
        <ul className='list-group'>
          {this.state.todos.map((todo,index)=>
            <li
            key = {index}
            className='list-group-item'>
            <h4 className='list-grup-item-heading'>{todo.todoTitle} <small><span className='label label-info'>{todo.todoPriority}</span></small></h4>
            <p><span className='glyphicon glyphicon-user'>{` ${todo.todoResponsible}`}</span></p>
            <p>{todo.todoDescription}</p>
            <button
            onClick = {this.handleRemoveTodo.bind(this, index)}
            className='bnt btn-danger btn-sm'><span className='glyphicon glyphicon-trash'></span>Delete</button>
            </li>)
          }
        </ul>
      </div>
    );
  }
}
