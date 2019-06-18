import React from 'react'

const Todos = ({todos, deleteTodo, toggleComplete}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <div>
                        <input 
                        type="submit" 
                        value=" " 
                        style={{textDecoration: todo.complete ? "line-through" : ""}} 
                        onClick={() => {toggleComplete(todo.id)}}/>  
                        <span style={{textDecoration: todo.complete ? "line-through" : ""}}>{todo.content}</span>
                        <button className="remove-todo right" onClick={() => {deleteTodo(todo.id)}}>X</button>
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