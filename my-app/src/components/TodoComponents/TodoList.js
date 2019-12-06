import React from 'react';

import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className="organize-list">
            {props.defaultList.map(item => {
                return <Todo item={item} key={item.id} toggleItem={props.toggleItem} />;
            })}
        </div>
    );
};

export default TodoList;