import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state = {...state,...payload}
            //asyncstorage save token
            return state;
        },
        logoutUser: (state) => {
            state = initialState
            //clean storage
            return state;
        },
        update: (state, {payload}) => {
            state = {...state, ...payload}
            return state;
        },
    },
})


export const selectUser = (state) => state.user;

export const {setUser, logoutUser, update} = userSlice.actions
export default userSlice.reducer
