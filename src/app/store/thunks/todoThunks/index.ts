import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from '../../../services/todoService';

export const fetchTodosAsync = createAsyncThunk(
            'todos/fetchTodos', 
                async () => {
                    const response = TodoService.getTodoList();
                    return response;
                }
);