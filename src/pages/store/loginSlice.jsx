import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "text",
    lastname: "text",
    age: 0,
    username: "text",
    token: null
}

export const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        loginUser(state, action){
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;
            state.age = action.payload.age;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        setUser(state, action){
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;
            state.age = action.payload.age;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
    },
        removeUser(state){
            state.name = null;
            state.lastname = null;
            state.age = null;
            state.username = null;
            state.token = null;
        }

    }
    )

export const {setUser, removeUser, loginUser} = userSlice.actions;

const userReducer = userSlice.reducer

export default userReducer;
