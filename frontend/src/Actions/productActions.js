import axios from "axios"

export const all_products = (keyword = "", CurrentPage=1, price = [0,50000], category) => async(dispatch) => {
    try {
        dispatch({
            type:"All_PRODUCT_REQUEST"
        })

        let link = `/api/v1/products?keyword=${keyword}&page=${CurrentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

        if(category){
            link = `/api/v1/products?keyword=${keyword}&page=${CurrentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;

        }

        const {data} = await axios.get(link)

        dispatch({
            type:"ALL_PRODUCT_SUCCESS",
            payload: data
        })

        
    } catch (error) {
        dispatch({
            type:"All_PRODUCT_FAIL",
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:"CLEAR_ERRORS"
    })
}