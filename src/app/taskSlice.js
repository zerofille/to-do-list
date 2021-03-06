import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    
    removeTask:(state, action) =>{
      const index = state.tasks.findIndex((todo) => todo.id === action.payload);
      state.tasks.splice(index, 1);
    },
  },
});
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
