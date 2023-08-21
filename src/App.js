import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import './App.css';
import AllTodo from "./pages/AllTodo";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import ModifyTodo from "./pages/ModifyTodo";

function App() {

    const [allTodos, setAllTodos] = useState([
        // Initial todos go here
        // { id: 1, task: 'Sample Task 1', complete: true, date: '2023-08-01 12:00:00' },
    ]);

    return (
        <BrowserRouter>
            <div id="app">
                <Navbar/>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/all/*" element={<AllTodo allTodos={allTodos}/>}/>
                    <Route path="/add/*" element={<AddTodo setAllTodos={setAllTodos} />}/>
                    <Route path="/modify/*" element={<ModifyTodo allTodos={allTodos} setAllTodos={setAllTodos}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
