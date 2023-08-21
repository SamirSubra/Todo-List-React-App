import React from 'react';

const Todo = ({ todo, toggleComplete }) => {
    return (
        <div className={`todo ${todo.complete ? 'complete' : ''}`}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleComplete(todo.id)} />
            <span>{todo.task}</span>
        </div>
    );
};

export default Todo;
