import React from 'react';
import {Link, useNavigate } from "react-router-dom";
import "./TodoForm.css";

const AddTodo = ({ allTodos, setAllTodos }) => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const newTodo = (event) =>{
        event.preventDefault(); // Prevent the default form submission

        const id = new Date().getTime(); // Get a unique timestamp
        const task = event.target.task.value;
        const date = event.target.date.value;
        const complete = event.target.complete.checked ? "done" : "";

        const myTodo = { id:id, task: task, date: date, complete: complete };
        setAllTodos((prevTodos) => [...prevTodos, myTodo]);

        // Redirect to AllTodo component
        navigate('/all');
    }

    return (
        <div>
            <Link to="/all"><button>Back</button></Link>
            <form onSubmit={newTodo}>  {/* instead of passing it as a reference, newTodo() calls the function too early */}
                <div className="elements">
                    <div className="left">
                        <p>Task</p>
                        <textarea name="task" id="" cols="30" rows="10" ></textarea>
                    </div>
                    <div className="right">
                        <p>Due</p>
                        <input type="date" name="date" />
                        <label className="switch">
                            <input type="checkbox" name="complete"/>
                            <span className="slider round"></span>
                        </label>
                        <span className="buttons">
                        <input type="submit" className="submit" value="Submit"/>
                        <button className="reset">Reset</button>
                    </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;