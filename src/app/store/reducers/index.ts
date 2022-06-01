import { combineReducers } from "redux"
import authSlicer from "../slices/authSlicer";
import paginationSlicer from "../slices/paginationSlicer";
import todoSlicer from "../slices/todoSlicer";

const createReducer = (newReducers = {}) => 
    combineReducers({
        todoRef: todoSlicer,
        authRef: authSlicer,
        paginationRef: paginationSlicer,
        ...newReducers
    });
export default createReducer;