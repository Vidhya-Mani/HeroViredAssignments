import React from "react";
import "./content.css";


function Main() {
    return (
        <div className="container">
            <div className="card">
                <div className="image-card">
                    <img src="/images/iphone.png" alt="phone img" srcset="" />
 
                </div>
                <div className="card-content">
                    <span>Name: Iphone</span>
                    <span>Brand: Apple</span>
                    <span>Price: 50,000</span>
                    <span>Rating: 4.5</span>
                <button type="Submit">Add to Cart</button>


                </div>
                

            </div>
        </div>

    )
}

export default Main;
