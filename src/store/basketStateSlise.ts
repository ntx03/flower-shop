import { createSlice } from '@reduxjs/toolkit';

interface basketState {
    basketState: {
        image: string,
        width: number,
        height: number,
        price: number,
        id: number,
        color: string,
        text: string,
        priceOtherServices: number,
        counter: number
    }[]
}

const initialState: basketState = {
    basketState: []
}

const basketStateSlice = createSlice({
    name: 'basketState',
    initialState,

    reducers: {
        setBasketState(state, action) {
            state.basketState.push({
                image: action.payload.image,
                width: action.payload.width,
                height: action.payload.height,
                price: action.payload.price,
                id: action.payload.id,
                color: action.payload.color,
                text: action.payload.text,
                priceOtherServices: action.payload.priceOtherServices,
                counter: action.payload.counter
            })
        },
        removeOrderBasket(state, action) {
            state.basketState.splice(action.payload, 1);
        },

        changeCounterState(state, action) {
            const item = state.basketState.find(item => item.id === action.payload.id);
            console.log(item);
            item.counter = action.payload.counter
        }
    }
})

export const { setBasketState, removeOrderBasket } = basketStateSlice.actions;
export const { changeCounterState } = basketStateSlice.actions;
export default basketStateSlice.reducer;