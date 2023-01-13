import TodoContext from "../context/TodoContext";
import { useContext, useEffect, useState } from "react";
import FilterTodos from "../components/FilterTodos";
import CreateTodo from "../components/CreateTodo";
import UpdateTodo from "../components/UpdateTodo";
import DeleteTodo from "../components/DeleteTodo";

const Todos = () => {
  const { todos, getTodos, error } = useContext(TodoContext);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      await getTodos()
      setLoading(false)
    }
    fetchData()

  }, [getTodos])

  return (
    <>
      <div className="container mt-5">

        <div className="row g-3">
          <CreateTodo />
          <FilterTodos />
          {error && <div className="text-danger fs-5">{error}</div>}
          {loading && <div className="col-md-12 text-center mt-5"><div className="spinner-border"></div></div>}
          {todos && todos.map(todo => (
            <div key={todo.id} className="col-md-4" >
              <div className={"card " + (todo.completed && "bg-light")}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>{todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}</div>
                  <div className=" d-flex  align-items-center">
                    <UpdateTodo todo={todo} />
                    <DeleteTodo todoId={todo.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>

  )
}

export default Todos