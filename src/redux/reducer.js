const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn Yoga",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: false,
      priority: "High",
    },
    {
      id: 3,
      name: "Learn Typescript",
      completed: false,
      priority: "Low",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  /*
    {
        type: 'todoList/addTodo',
        payload: {id: 5, name: 'Learn Football, completed: false, priority: Medium}
    }
    */
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
         action.payload,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer; 
