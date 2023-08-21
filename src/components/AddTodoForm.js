import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                placeholder="Ajouter une nouvelle tâche..."
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddTodoForm;
