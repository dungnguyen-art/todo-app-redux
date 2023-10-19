// const initState = [
//   {
//     id: 1,
//     name: "Learn Yoga",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "Learn Redux",
//     completed: true,
//     priority: "High",
//   },
//   {
//     id: 3,
//     name: "Learn Typescript",
//     completed: false,
//     priority: "Low",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default todoListReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Learn Yoga",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: true,
      priority: "High",
    },
    {
      id: 3,
      name: "Learn Typescript",
      completed: false,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
