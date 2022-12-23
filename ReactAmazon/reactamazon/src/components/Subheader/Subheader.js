import React from "react";
import './subheader.css';

function Subheader(){
    return(
        <div className="subheader">
        <div className="section4">
            <div className="icon">
                <i className="fa fa-reorder"></i>
                <span>All</span>
            </div>
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>

        </div>
        <div className="section5">
            <div>Shop deals in Electronics</div>

        </div>

        
    </div>
    )
}

export default Subheader;