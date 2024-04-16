import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: {},
    token: "text"
}

export const userSlice = createSlice( {
    name: 'user',
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

const userReducer = userSlice.reducer

export default userReducer;
