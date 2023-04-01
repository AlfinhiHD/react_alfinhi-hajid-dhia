import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: 
        [{
            productId: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCathegory: "Doe",
            productImage: "Doe",
            productFreshness: "Doe",
            productDesc: "Doe",
            productPrice: "Doe"
        }]        
    },
    reducers: {
        addTodo: (state, actions) => {
            const product = {
                productId: uuid(),
                productName: actions.payload,
                productCathegory: actions.payload,
                productImage: actions.payload,
                productFreshness: actions.payload,
                productDesc: actions.payload,
                productPrice: actions.payload
            }

            return[...state, product]
        }
    }
}) 

//export action
export const { addProduct } = productsSlice.actions

//export reducer
export default productsSlice.reducer