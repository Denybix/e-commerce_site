import React from "react";
import { useParams } from 'react-router-dom';
import { useGlobalContext } from "./context";
import './product.css';
import Navbar from "./Navbar";

const ProductDescription = () =>
{
    const {id} = useParams();
    const {filteredproducts, isloading} = useGlobalContext();
    const product = filteredproducts.find((item) => item.id === parseInt(id));

    if(isloading)
    {
        return(
            <>
                <h1>Loading.....</h1>
            </>
        )
    }
    const { title, price, category, description, image, rating } = product;
    
    return(
        <div className="product">
            <Navbar/>        
                <div className="product-card" key={id}>
                    <img src={image} alt="Product image" className="product-img"/>
                    <div className="product-details">
                        <h2>{title}</h2>                   
                        <p>{category}</p>
                        <p>{description}</p>
                        <p>Price: ₹ {price.toFixed(2)<100 ? (
                            price.toFixed(2)*1000
                            ):price.toFixed(2)*80}</p>
                         <p>
                            Rating: {rating.rate} ({rating.count} reviews)
                         </p>
                        <div className="buttons">
                            <button className="cart-button">Add to cart</button>
                            <button className="buy-button">Buy</button>   
                        </div>
                    </div>
                </div>          
        </div>
    )           
}
export default ProductDescription;