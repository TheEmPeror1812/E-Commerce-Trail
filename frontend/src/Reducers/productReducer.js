import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading : true
};

export const productReducer = createReducer(initialState, {
    ALL_PRODUCT_REQUEST: (state) => {
        state.loading = true;
        state.products = [];
    },
    ALL_PRODUCT_SUCCESS: (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productsCount = action.payload.productsCount;
        state.resultPerPage = action.payload.resultPerPage;
        state.filteredProductsCount = action.payload.filteredProductsCount;
    },
    All_PRODUCT_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
        state.error = null;
    },

});