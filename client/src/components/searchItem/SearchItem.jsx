import React from "react";
import './searchItem.css'

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/124866272.webp?k=c52304a1ffd470c4d21f9c58035685f0164419926b25c7165de1861cd9eef2a8&o=&s=1"
                alt="" className="searchImg"/>
            <div className="searchDesc">
                <h1 className="searchTitle">Jaipur New Apartments</h1>
                <span className="searchDistance">400m from center</span>
                <span className="searchTaxi">Free airport Taxi</span>
                <span className="searchSubtitle">Studio Apartment with Air conditioning</span>
                <span className="searchFeatures">Entire Studio, 21m^2 1, full bed</span>
                <span className="searchCancelOptions">Free Cancellation</span>
                <span className="searchCancelSubtitle">You can cancel anytime free of cost,so book asap at great price today!</span>
            </div>
            <div className="searchDetails">
                <div className="searchRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchDetailTexts">
                    <span className="searchPrice">$123</span>
                    <span className="searchTaxes">Includes taxes and fees</span>
                    <button className="searchCheckButton">See Availability</button>
                </div>
            </div>

        </div>

    )
}
export default SearchItem
