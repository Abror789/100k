import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mail: []
}

const mailSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setMail: (state, {payload}) => {
            state = {...state,...payload}
            //asyncstorage save token
            return state;
        },
        update: (state, {payload}) => {
            state = {...state, ...payload}
            return state;
        },
    },
})


export const selectMail = (state) => state.mail;

export const {setMail, update} = mailSlice.actions
export default mailSlice.reducer
