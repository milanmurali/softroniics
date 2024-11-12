import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    data: []

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
        },
        additemtocart: (state, action) => {
            const item = state.data.find((item) => (item.id === action.payload.id))
            if (item) {
                item.quantity += 1
            }
            else {
                state.data.push({ ...action.payload, quantity: 1 })
            }
        },
        removeitemfromcart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
        increasequantity: (state, action) => {
            const item = state.data.find((item) => (item.id === action.payload.id))
            if (item) {
                item.quantity += 1
            }
        },
        decreasequantity: (state, action) => {
            const item = state.data.find((item) => (item.id === action.payload.id))
            if (item) {
                item.quantity <=  1 ? item.quantity = 1 : item.quantity -= 1
            }
        }
    }
})


export const { increment, decrement, additemtocart, removeitemfromcart, increasequantity, decreasequantity } = counterslice.actions
export default counterslice.reducer