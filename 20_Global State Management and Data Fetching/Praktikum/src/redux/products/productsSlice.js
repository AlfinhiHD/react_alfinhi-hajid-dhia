import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        listProduct: [
        {
            productId: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCathegory: "Doe",
            productImage: "Doe",
            productFreshness: "Doe",
            productDesc: "Doe",
            productPrice: "Doe"
        },
        {
            productId: "e8ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCathegory: "Doe",
            productImage: "Doe",
            productFreshness: "Doe",
            productDesc: "Doe",
            productPrice: "Doe"
        },
        {
            productId: "e9ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCathegory: "Doe",
            productImage: "Doe",
            productFreshness: "Doe",
            productDesc: "Doe",
            productPrice: "Doe"
        }
    ]},
    reducers: {
        addProduct: (state, actions) => {
            return {
                ...state,
                listProduct: [...state.listProduct, actions.payload],
            };
        },
        deleteProduct: (state, actions) => {
            state.listProduct = state.listProduct.filter(product => product.productId != actions.payload)
        },
        editProduct: (state, actions) => {
            state.listProduct = state.listProduct.map(product => product.productId === actions.payload.productId ? actions.payload : product)
        }
    }
}) 

//export action
export const { addProduct, deleteProduct, editProduct } = productsSlice.actions

//export reducer
export default productsSlice.reducer