import { createSlice } from '@reduxjs/toolkit'
interface TestState {
    test: any[],
}

const initialState: TestState = {
    test: []
}

const testSlice = createSlice({
    name: 'test',
    initialState,

    reducers: {
        test(state, action) {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.test.splice(0, 1);
            state.test.push(
                action.payload
            )
        }
    }
})

export const { test } = testSlice.actions;
export default testSlice.reducer;