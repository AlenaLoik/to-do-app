import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [],
    // todoToShow = 'all'
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

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  render() {
    return(
      <div className="todo-app container">
        <h1 className="center pink-text">TODOS</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
          toggleComplete={this.toggleComplete}/>
            <div className="left-todo">todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
            <div className="botton-option-todo center">
              <button className="botton-all" >
                All </button>
              <button className="botton-active" >
                Active </button>
              <button className="botton-completed" > 
                Completed </button>
            </div>
     </div> 
    );
  }
}

export default App;
