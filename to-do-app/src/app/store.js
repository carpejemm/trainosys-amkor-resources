import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
// import userReducer from '../features/user/userSlice';
// import settingsReducer from '../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // user: userReducer,
    // settings: settingsReducer,
  },
});