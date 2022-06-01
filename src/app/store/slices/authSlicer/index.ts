import { createSlice } from "@reduxjs/toolkit"

type AuthStoreStateType = {
    authenticated: boolean;
}
const initialState: AuthStoreStateType = {
    authenticated: false,
}

const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.authenticated = action.payload
        },
        logout: (state, action) => {
            state.authenticated = action.payload
            
        },
    }
});
export const { signIn, logout } = authSlicer.actions;
export default authSlicer.reducer;