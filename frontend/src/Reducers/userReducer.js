import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {
    LOGIN_REQUEST: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    LOGIN_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.isAuthenticated = false;
    },
    LOGOUT_REQUEST: (state) => {
        state.loading = true;
    },
    LOGOUT_SUCCESS: (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
    },
    LOGOUT_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
        state.error = null;
    },
    REGISTER_REQUEST: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    REGISTER_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    REGISTER_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.isAuthenticated = false;
    },
    LOADUSER_REQUEST: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOADUSER_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    LOADUSER_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.isAuthenticated = false;
    },

});

export const profileReducer = createReducer(initialState, {
    UPDATE_PROFILE_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_PROFILE_SUCCESS: (state,action) => {
        state.loading = false;
        state.isUpdated = action.payload;
    },
    UPDATE_PROFILE_FAIL: (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },
    UPDATE_PROFILE_RESET: (state) => {
        state.isUpdated = false;
    },
    CLEAR_ERRORS: (state) => {
        state.error = null;
    },

});

export const changePasswordReducer = createReducer(initialState, {
    UPDATE_PASSWORD_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_PASSWORD_SUCCESS: (state,action) => {
        state.loading = false;
        state.isUpdated = action.payload;
    },
    UPDATE_PASSWORD_FAIL: (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },
    UPDATE_PASSWORD_RESET: (state) => {
        state.isUpdated = false;
    },
    CLEAR_ERRORS: (state) => {
        state.error = null;
    },
});
