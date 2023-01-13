
import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
const FilterTodos = () => {
    const [loading, setLoading] = useState(false)
    const { filterTodos } = useContext(TodoContext);
    const handleFilter = async (e) => {
        setLoading(true)
        await filterTodos(e.target.value)
        setLoading(false)
    }
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-3">
                    <h5>Filter</h5>
                    <select className="form-select form-select-sm" onChange={e => handleFilter(e)}>
                        <option value="200">all</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="80">80</option>
                        <option value="100">100</option>
                    </select>
                    {loading && <div className="col text-center mt-5"><div className="spinner-border"></div></div>}
                </div>
            </div>
        </div>
    )
}

export default FilterTodos