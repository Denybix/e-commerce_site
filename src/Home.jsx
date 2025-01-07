import React from "react";
import { useGlobalContext } from "./context";
import './home.css';
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Home = () =>
{
    const {filteredproducts, isloading} = useGlobalContext();

    if(isloading)
    {
        return(
            <>
                <h1>Loading.....</h1>
            </>
        )
    }
    return(
        <div className="products-div">
                <Navbar/>
                {filteredproducts.map((product)=>{
                    const{id,title,price,category,image,rating}=product;
                    return(               
                        <div className="card" key={id}>
                            <NavLink to={`/product/${id}`}>
                                <img src={image} alt="Product image" className="home-product-img"/>
                                <h2>{title}</h2>
                                <p>{category}</p>
                                <p>Price: ₹ {price.toFixed(2)<100 ? (
                                    price.toFixed(2)*1000
                                    ):price.toFixed(2)*80}</p>
                                <p>
                                    Rating: {rating.rate}
                                </p>
                            </NavLink>
                        </div>
                    )
                })}
            </div>    
    )
}

export default Home;