import { createSlice } from "@reduxjs/toolkit"

type PaginationStoreStateType = {
    current: number;
    total: number;
    pageSize: number;
    numOfPage: number;
}
const initialState: PaginationStoreStateType = {
    current: 1,
    total: 0,
    numOfPage: 1,
    pageSize: 10
}

const paginationSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        nextPage: (state) => {
            if(state.current < state.numOfPage){
                state.current = state.current + 1
            }
        },
        setTotalItems: (state, option) => {
            state.total = option.payload;
            state.numOfPage = option.payload % 10 !== 0 ? (option.payload / 10) +1 : option.payload / 10;
        },
        previousPage: (state) => {
            if(state.current > 1){
                state.current = state.current - 1
            }
            
        },
    }
});
export const { nextPage, previousPage, setTotalItems } = paginationSlicer.actions;
export default paginationSlicer.reducer;