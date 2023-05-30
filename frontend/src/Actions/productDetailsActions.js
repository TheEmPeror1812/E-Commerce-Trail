import axios from "axios";

export const productDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "PRODUCT_REQUEST"
        })
        const { data } = await axios.get(`/api/v1/product/${id}`)
        dispatch({
            type: "PRODUCT_DETAILS_SUCCESS",
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: "PRODUCT_DETAILS_FAIL",
            payload: error.response.data.message
        })
    }

}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:"CLEAR_ERRORS"
    })
}