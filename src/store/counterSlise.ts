import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    navigation: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
    navigation: false
}

export const counterSlice = createSlice({
    name: 'navigation',
    initialState,

    reducers: {
        falseNavigation: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.navigation = false
        },
        trueNavigation: state => {
            state.navigation = true
        },
    }
})

export const { falseNavigation, trueNavigation } = counterSlice.actions
