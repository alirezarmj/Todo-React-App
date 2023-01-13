import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";


const CreateTodo = () => {
    const [loading, setLoading] = useState(false)
    const { addTodos } = useContext(TodoContext);
    const [title, setTitle] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title) {
            setLoading(true)
            await addTodos(title)
            setLoading(false)
        }
        setTitle("")
    }
    return (
        <>
            <h3>Create Todo:</h3>
            <form className="row mb-3" onSubmit={e => handleSubmit(e)}>
                <div className="col-md-6">
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Add Todo" />
                    <div className="form-text text-danger">
                        {!title && <div className="mt-1">Title is required</div>}
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-dark">Create {loading && <div className="spinner-border spinner-border-sm"></div>}</button>
                </div>
            </form>
            <hr />
        </>
    )
}

export default CreateTodo