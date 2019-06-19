import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content.length > 0 && this.state.content[0] !== " ") {
        this.props.addTodo(this.state);
        this.setState({
            content: '',
            complete: false
        })} else {
            alert ("Plese add todo")
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What needs to bee done?</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;