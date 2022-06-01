import { createSlice } from "@reduxjs/toolkit"
import { fetchTodosAsync } from "../../thunks/todoThunks";

type TodoStoreStateType = {
    todos: any[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
const initialState: TodoStoreStateType = {
    todos: [],
    status: 'idle'
}

const todoSlicer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        removeTodos: (state, action) => {
            state.todos.filter(todo => todo.id !== action.payload.id)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.todos = action.payload ?? [];
        });
        builder.addCase(fetchTodosAsync.rejected, (state) => {
            state.status = 'failed';
        });
    }
});
export const { setTodos, removeTodos } = todoSlicer.actions;
export default todoSlicer.reducer;