import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
   
}

const counterslice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1
        },
        decrement: (state, action) => {
            state.count -= 1
        }
    }
})


export const { increment, decrement } = counterslice.actions
export default counterslice.reducer