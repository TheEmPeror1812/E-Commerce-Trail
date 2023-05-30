import { createReducer } from "@reduxjs/toolkit";

export const CartReducer = createReducer(
  {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("carshippingInfotItems"))
      : {},
  },
  {
    ADD_TO_CART: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i].product === item.product) {
            state.cartItems[i].quantity = item.quantity;
            break;
          }
        }
      } else {
        state.cartItems.push(item);
      }
    },

    REMOVE_CART_ITEM: (state, action) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (i) => i.product !== action.payload
      );
    },

    SAVE_SHIPPING_INFO: (state, action) => {
      state.shippingInfo = action.payload;
    },
  }
);
