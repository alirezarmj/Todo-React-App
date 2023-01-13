import TodoContext from "./TodoContext"
import { useCallback, useReducer } from "react";
import todoReducer from "./todoReducer";
import axios from "axios";
import Swal from "sweetalert2";


const initialState = {
    todos: [],
    error: null
}
const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const getTodos = useCallback(async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            dispatch({ type: "SET_TODOS", payload: res.data })
            dispatch({ type: "SET_ERROR", payload: null })
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message })
            dispatch({ type: "SET_TODOS", payload: null })
        }
    }, [])
    const filterTodos = async (count) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
            dispatch({ type: "FILTER_TODOS", payload: res.data })
            dispatch({ type: "SET_ERROR", payload: null })
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message })
            dispatch({ type: "FILTER_TODOS", payload: null })
        }
    }
    const addTodos = async (title) => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {id: "250" ,title: title, completed: false })
           console.log(res.data)
            dispatch({ type: "ADD_TODOS", payload: res.data })
            dispatch({ type: "SET_ERROR", payload: null })
            Swal.fire({
                title: "Task added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top"
            }
            )
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message })
            dispatch({ type: "ADD_TODOS", payload: null })
        }
    }
    const updateTodo = async (todo) => {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                title: todo.title,
                completed: !todo.completed
            });
            
            dispatch({ type: "UPDATE_TODO", payload: res.data });
            dispatch({ type: "SET_ERROR", payload: null });
            Swal.fire({
                title: "Task updated",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message });
            dispatch({ type: "UPDATE_TODO", payload: [] });
        }
    }
    const deleteTodos = async (todoId) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
   
            dispatch({ type: "DELETE_TODOS", payload: todoId })
            dispatch({ type: "SET_ERROR", payload: null })
            Swal.fire({
                title: "Task deleted",
                icon: "warning",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top"
            })
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message })
            dispatch({ type: "DELETE_TODOS", payload: null })
        }
    }
    return (
        <TodoContext.Provider value={{ ...state, getTodos, filterTodos, addTodos, updateTodo, deleteTodos }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider