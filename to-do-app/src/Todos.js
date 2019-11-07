import React from 'react'

const Todos = ({todos, deleteTodo, toggleComplete}) => {
    const completedStyleTodo = {
        textDecoration: "line-through",
        color: "#9c9c9c"
    }

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div>
                        <input 
                        type="submit" 
                        value={todo.complete ? "✓" : "  "} 
                        onClick={() => {toggleComplete(todo.id)}}/>  
                        <span style={todo.complete ? completedStyleTodo : null}>{todo.content}</span>
                        <button  title="remove todo" className="remove-todo right"  onClick={() => {deleteTodo(todo.id)}}>X</button>
                    </div> 
                </div>
            )
        })
    ) : (
        <p className="center">Nothing to do</p>
    )
    return (
        <div className="todos collection">
           {todoList} 
        </div>
    )
}

export default Todos