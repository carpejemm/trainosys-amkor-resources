import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [{
    id: 1,
    text: 'Learn Redux Toolkit',
    completed: false
  }, {
    id: 2,
    text: 'Build a to-do app',
    completed: true
  }
],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    onToggle: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
});

export const { addTodo, deleteTodo, onToggle } = todoSlice.actions;
export default todoSlice.reducer;