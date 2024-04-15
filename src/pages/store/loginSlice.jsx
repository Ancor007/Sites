import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    token: null
}

export const userSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload  
        },
        removeUser(state){
            state.user = null
        }

    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
