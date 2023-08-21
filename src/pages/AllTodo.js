import React from 'react';
import'./AllTodo.css';
import { Link } from 'react-router-dom';

const AllTodo = ({allTodos}) => {
    return (
        <div id="all_todo">
            <span className="buttons">
                <Link to="/add">
                    <button>New task</button>
                </Link>
            </span>
            <table>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Complete</th>
                    <th>Due</th>
                    <th></th>
                </tr>
                <tbody>
                {allTodos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.task}</td>
                        <td>{todo.complete ?  "👍🏽" : "👎🏽"}</td>
                        <td>{todo.date}</td>
                        <td><Link to={`/modify/${todo.id}`} className="edit">Edit</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default AllTodo;