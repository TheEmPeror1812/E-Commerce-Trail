import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./Reducers/productReducer";
import { productDetailsReducer } from "./Reducers/productDetailsReducer";
import { userReducer, profileReducer, changePasswordReducer } from "./Reducers/userReducer";
import {CartReducer} from "./Reducers/cartReducer.js"

// let initialState = {
//     cart: {
//       cartItems: localStorage.getItem("cartItems")
//         ? JSON.parse(localStorage.getItem("cartItems"))
//         : [],
//     }
//   };


const store = configureStore({
    // initialState,
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        profile: profileReducer,
        changePassword:changePasswordReducer,
        cart: CartReducer
    }
})

export default store;