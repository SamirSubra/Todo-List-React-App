import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./TodoForm.css";

const ModifyTodo = ({allTodos, setAllTodos}) => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const location = useLocation();
    const todoId = location.pathname.split('/').pop(); // Extract the task id from the URL
    const todo = allTodos.find(todo => todo.id === parseInt(todoId)); // Find the matching todo by ID

    const [taskValue, setTaskValue] = useState(todo.task);
    const [dateValue, setDateValue] = useState(todo.date);
    const [completeValue, setCompleteValue] = useState(todo.complete);


    const editTodo = (event) => {

        event.preventDefault(); // Prevent the default form submission

        const task = event.target.task.value;
        const date = event.target.date.value;
        const complete = event.target.complete.checked ? "done" : "";

        // Update the todo with modified values
        const updatedTodo = {
            ...todo,
            task: task,
            date: date,
            complete: complete
        };

        // Find the index of the todo to be updated
        const todoIndex = allTodos.findIndex(item => item.id === todo.id);

        // Update the allTodos array with the modified todo
        setAllTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos[todoIndex] = updatedTodo;
            return updatedTodos;
        });

        // Redirect to AllTodo component
        navigate('/all');
    }

    const deleteTodo = () => {
        const confirmation = window.confirm(`You are going to delete this task, are you sure ?`);

        if (confirmation) {
            const updatedTodos = allTodos.filter(todo => todo.id !== parseInt(todoId));
            setAllTodos(updatedTodos);
            navigate('/all');
        }

    }
    const resetTodo = () => {
        setTaskValue("");
        setDateValue("");
        setCompleteValue(false);
    }

    return (
        <div>
            <Link to="/all"><button>Back</button></Link>
            <form onSubmit={editTodo}>
                <div className="elements">
                    <div className="left">
                        <p>Task</p>
                        <textarea
                            name="task"
                            id="task"
                            cols="30"
                            rows="10"
                            value={taskValue}
                            onChange={e => setTaskValue(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="right">
                        <p>Due</p>
                        <input
                            type="date"
                            name="date"
                            value={dateValue}
                            onChange={e => setDateValue(e.target.value)}
                        />
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="complete"
                                checked={completeValue}
                                onChange={e => setCompleteValue(e.target.checked)}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span className="buttons">
                            <input type="submit" className="submit" value="Submit" />
                            <button className="reset" type="button" onClick={resetTodo}>Reset</button>
                        </span>
                    </div>
                    <button className="delete" onClick={deleteTodo}>Delete</button>
                </div>
            </form>
        </div>
    );
};

export default ModifyTodo;