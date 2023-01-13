import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";


const UpdateTodo = ({ todo }) => {
    const [loading, setLoading] = useState(false)
    const { updateTodo } = useContext(TodoContext);
    const handleUpdate = async() => {
        setLoading(true)
        await updateTodo(todo)
        setLoading(false)
    }
    return (
        <>
            {todo.completed ?
                <i className="bi bi-check-all fs-4" style={{cursor:"pointer"}} onClick={() => handleUpdate()}></i>
                :
                <i className="bi bi-check fs-4" style={{cursor:"pointer"}} onClick={() => handleUpdate()}></i>
            }
            {loading && <div className="spinner-border spinner-border-sm "></div>}
        </>
    )
}

export default UpdateTodo