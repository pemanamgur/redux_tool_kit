import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello World.' }],
};

export const todoSlice = createSlice({
  name: 'todo', //name is shown there in redux dev tool
  initialState,
  //   reducer bitra property and function aucha
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.id);
    },
    updateTod0: (state, action) => {
      const { id, text } = action.payload;
      const test = state.todos.find((t) => t.id == id);
      if (test) {
        test.text = text;
      }
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
