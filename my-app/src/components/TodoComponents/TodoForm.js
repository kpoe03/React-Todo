import React from 'react';
// import { useState } from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemText: "",
            name: "Kristen",
            town: "Reynoldsburg"
        };
        // console.log(this.state);
    }

    changeHandler = event => {
        this.setState({ itemText: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemText: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                type="text"
                name="itemText"
                value={this.state.itemText}
                onChange={this.changeHandler}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
    
}

export default TodoForm;