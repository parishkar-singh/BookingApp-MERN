import React from "react";
import './searchItem.css'
import {Link} from "react-router-dom";

const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img
                src={item.photo && item.photo[0]}
                alt="" className="searchImg"/>
            <div className="searchDesc">
                <h1 className="searchTitle">{item.name}</h1>
                <span className="searchDistance">{item.distance}</span>
                <span className="searchTaxi">Free airport Taxi</span>
                <span className="searchSubtitle">Studio Apartment with Air conditioning</span>
                <span className="searchFeatures">{item.desc}</span>
                <span className="searchCancelOptions">Free Cancellation</span>
                <span className="searchCancelSubtitle">You can cancel anytime free of cost,so book asap at great price today!</span>
            </div>
            <div className="searchDetails">
                {item.rating && <div className="searchRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="searchDetailTexts">
                    <span className="searchPrice">{item.cheapest}</span>
                    <span className="searchTaxes">Includes taxes and fees</span>
                    <Link className={"link"} to={`/hotels/${item._id}`}>

                    <button className="searchCheckButton">See Availability</button>
                    </Link>
                </div>
            </div>

        </div>

    )
}
export default SearchItem
