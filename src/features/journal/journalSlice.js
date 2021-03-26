import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchJournalTasks,
  addTask,
  removeTask,
  editTask,
} from "../../api/journalTasks";

export const fetchTasks = createAsyncThunk(
  "journal/fetchTasks",
  fetchJournalTasks
);

export const createTask = createAsyncThunk("journal/createTask", addTask);

export const deleteTask = createAsyncThunk("journal/deleteTask", removeTask);

export const completedTask = createAsyncThunk(
  "journal/completedTask",
  editTask
);
const journalSlice = createSlice({
  name: "journal",
  initialState: {
    tasks: [],
    isTaskCreated: false,
    isTaskDeleted: false,
    isTaskLoading: false,
  },
  reducers: {
    toggleCompletedTask: (state, action) => {
      state.tasks[action.payload].isComplete = !state.tasks[action.payload]
        .isComplete;
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.isTaskLoading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.isTaskLoading = false;
      state.tasks = action.payload;
    },
    [createTask.fulfilled]: (state) => {
      state.isTaskCreated = true;
    },

    [deleteTask.fulfilled]: (state) => {
      state.isTaskDeleted = true;
      // Send message to the front end
    },

    [completedTask.fulfilled]: (state, action) => {
      console.log("Completed Success");
      // Send message to the front end
    },
  },
});

export const journalSelector = (state) => state.journal;

export const { addJournalTask, toggleCompletedTask } = journalSlice.actions;

export default journalSlice.reducer;
