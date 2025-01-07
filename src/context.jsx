import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://fakestoreapi.com/products"

const initialState = {
    isloading: true,
    query: "",
    products: [],
    filteredproducts: [],
};

const Appcontext = React.createContext();

const AppProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(reducer,initialState);

    const fetchApiData = async(url) =>
    {
        dispatch({type:"SET_LOADING"});
        try
        {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"SET_PRODUCTS",
                payload:data    
            });
        }
        catch (error)
        {
            console.log(error);
        }
    }

    const searchPost = (searchQuery) =>
    {
        dispatch({type:"SET_SEARCH", payload: searchQuery});
    }
    
    useEffect(()=>
    {
        fetchApiData(`${API}`)
    },[API])

    return(
        <Appcontext.Provider value={{...state, searchPost}}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () =>
{
    return useContext(Appcontext);
}
export {AppProvider, useGlobalContext};