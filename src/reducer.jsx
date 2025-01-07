const reducer = (state,action) =>
{
    switch(action.type)
    {
        case "SET_LOADING":
            return{
                ...state,
                isloading: true,
            }
        case "SET_PRODUCTS":
            return{
                ...state,
                isloading: false,
                products: action.payload,
                filteredproducts: action.payload,
            }
        case "SET_SEARCH":
            return{
                ...state,
                isloading: false,
                query: action.payload,
                filteredproducts: state.products.filter((product) =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            ),
            }
    }
}

export default reducer;