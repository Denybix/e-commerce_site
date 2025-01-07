import React from "react";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import './electronics.css'
import { NavLink } from "react-router-dom";

const Electronics = () =>
{
    const {products, isloading} = useGlobalContext();

    const filteredproducts = products.filter(product => product.category.includes("electronics"))
    
    
    if (isloading) {
        return (
        <div className="loading">
            <h1>Loading...</h1>
        </div>
        );
    }
    
    return(
        <div className="best-products">
            <Navbar/>
            {filteredproducts.map((product)=>{
                const{id, title, price, description, category, image, rating} = product;
                return(
                    <div key={id} className="electronics-product-card">
                        <NavLink to={`/product/${id}`}>
                            <img src={image} alt={title} className="electronics-product-img" />
                            <h2>{title}</h2>
                            <p>Category: {category}</p>
                            <p>Price: ₹ {price.toFixed(2)<100 ? ( 
                                    price.toFixed(2)*1000
                                    ):price.toFixed(2)*80}</p>
                            <p>
                                Rating: {rating.rate} ({rating.count} reviews)
                            </p>
                        </NavLink>
                    </div>
                );      
            })}
        </div>
    )
};

export default Electronics;