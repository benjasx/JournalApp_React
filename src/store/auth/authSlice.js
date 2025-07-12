import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    status: 'not-auththenticated', // 'not-auththenticated', 'authtenticated'
    uid: null,
    email: null,
    displaName: null,
    photoURL: null,
    errorMessge: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        checkingCredentials: (state) => {
            state.status = 'checking'
            console.log(state.status)
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
