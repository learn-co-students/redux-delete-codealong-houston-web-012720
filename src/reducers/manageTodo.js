export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };

    case 'DELETE_TODO':

        return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}

    case 'LIKE_TODO':
      let todoIndex = state.todos.findIndex(todo => todo.id === action.payload)
      let likeTodo =  state.todos[todoIndex]
      likeTodo.like += 1
      state.todos.splice(todoIndex,1,likeTodo)
      return {...state,todos: state.todos}

    default:
      return state;
  }
}
