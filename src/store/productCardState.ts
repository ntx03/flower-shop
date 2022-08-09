import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface popupCardState {
    popupCardState: {
        path: string,
        image: string,
        image2: string,
        image3: string,
        width: number,
        height: number,
        price: number,
        priceOld: number,
        id: number,
        minProduct: number,
        color: string[],
        text: string,
        reviews: {
            name: string,
            text: string
        }[],
        otherServices: {
            price: number,
            text: string
        }[],
    }
}

const initialState: popupCardState = {
    popupCardState: {
        path: null,
        image: null,
        image2: null,
        image3: null,
        width: undefined,
        height: undefined,
        price: undefined,
        priceOld: undefined,
        id: undefined,
        minProduct: null,
        color: null,
        reviews: null,
        otherServices: null,
        text: null
    }
}

const popupCardStateSlice = createSlice({
    name: 'popupCardState',
    initialState,

    reducers: {
        setPopupCardState(state, action) {

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.popupCardState = {
                path: action.payload.path,
                image: action.payload.image,
                image2: action.payload.image2,
                image3: action.payload.image3,
                width: action.payload.width,
                height: action.payload.height,
                price: action.payload.price,
                priceOld: action.payload.priceOld,
                id: action.payload.id,
                minProduct: action.payload.minProduct,
                color: action.payload.color,
                reviews: action.payload.reviews,
                otherServices: action.payload.otherServices,
                text: action.payload.text,
            }
        }

    }
})

export const { setPopupCardState } = popupCardStateSlice.actions;
export default popupCardStateSlice.reducer;