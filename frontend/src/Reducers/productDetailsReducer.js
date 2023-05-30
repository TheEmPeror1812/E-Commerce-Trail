import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
};

export const productDetailsReducer = createReducer(initialState, {
    PRODUCT_REQUEST: (state) => {
        state.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (state, action) => {
        state.loading = false;
        state.product = action.payload
    },
    PRODUCT_DETAILS_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
        state.error = null;
    },
});