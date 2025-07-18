import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    status: 'checking', // 'not-auththenticated', 'authtenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.status = 'auththenticated'; // 'not-auththenticated', 'authtenticated;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-auththenticated'; // 'not-auththenticated', 'authtenticated;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
            console.log(state.status)
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
