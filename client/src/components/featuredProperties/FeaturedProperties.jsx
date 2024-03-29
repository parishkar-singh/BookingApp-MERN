import React from "react";
import './featuredproperties.css'
import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
    const {data, loading, error} = useFetch("/hotels?featured=true")

    return (<div className="fp">
        {
            loading ? ("Loading") : (
                <>
                    {data.map(item => (
                        <div className="fpItem">
                            <img
                                src={item.photos[0]}
                                alt="" className="fpImg"/>
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ${item.cheapest}</span>

                            {item.rating && <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>excellent</span>
                            </div>}
                        </div>
                    ))}
                </>)
        }


    </div>)

}
export default FeaturedProperties
