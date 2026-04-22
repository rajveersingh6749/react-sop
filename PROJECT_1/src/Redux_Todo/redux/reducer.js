const initialState = {
  todos: [],
  filters: 'ALL',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo,
        ),
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }

    case 'SET_FILTER':
      return {
        ...state,
        filters: action.payload,
      }

    case 'CLEAR_ALL_TODOS':
      return {
        ...state,
        todos: [],
      }

    case 'CLEAR_COMPLETED_TODOS':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      }

    default:
      return state
  }
}
