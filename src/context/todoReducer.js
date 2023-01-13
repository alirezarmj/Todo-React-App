const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        case "FILTER_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        case "ADD_TODOS":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo)
            }
        case "DELETE_TODOS":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default todoReducer;