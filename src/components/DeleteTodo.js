import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";


const DeleteTodo = ({ todoId }) => {
    const [loading, setLoading] = useState(false)
    const { deleteTodos } = useContext(TodoContext);
    
    const handleDelete=async ()=>{
        setLoading(true)
        await deleteTodos(todoId)
    }
    return (
        <>
            <i className="bi bi-trash fs-5 " style={{cursor:"pointer"}} onClick={()=>handleDelete()}></i>
            {loading && <div className="spinner-border spinner-border-sm"></div>}
        </>
    )
}

export default DeleteTodo