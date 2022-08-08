import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface popupCardState {
    popupCardState: {
        path: string,
        image1: string,
        image2: string,
        image3: string,
        width: number,
        height: number,
        price: number,
        priceOld: number,
        id: number,
        minProduct: number,
        color: string[],
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
        path: '',
        image1: '',
        image2: '',
        image3: '',
        width: null,
        height: null,
        price: null,
        priceOld: null,
        id: null,
        minProduct: null,
        color: [''],
        reviews: [],
        otherServices: [],
    }
}