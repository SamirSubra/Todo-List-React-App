import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Acheter des courses', complete: false },
        { id: 2, task: 'Faire du sport', complete: true },
    ]);

    const toggleComplete = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    };

    const addTodo = task => {
        const newTodo = { id: todos.length + 1, task, complete: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <div className="home">
            <h1>Ma TodoList</h1>
            <TodoList todos={todos} toggleComplete={toggleComplete} />
            <AddTodoForm addTodo={addTodo} />
        </div>
    );
};

export default Home;
