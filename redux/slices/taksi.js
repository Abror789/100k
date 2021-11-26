import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    taksi: []
}

const taksiSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTaksi: (state, {payload}) => {
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


export const selectTaksi = (state) => state.taksi;

export const {setTaksi, update} = taksiSlice.actions
export default taksiSlice.reducer
