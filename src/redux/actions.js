// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 5, name: 'Learn Football', completed: false, priority: "Medium"}
// }

// action creators => function. 
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo', 
        payload: data
    }
}
