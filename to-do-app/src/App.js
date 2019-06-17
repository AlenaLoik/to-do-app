import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter (todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center pink-text">TODOS</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}/>
        <div className="left-todo">todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
      </div> 
    );
  }
}

export default App;
