import React from "react";
import './propertylist.css'
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
    const {data, loading, error} = useFetch("/hotels/countByType")
    const images = [
        "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1=",
    ]
    return (
        <div className="pList">
            {loading ? "Loading " : (
                <>
                    {data && images?.map((img,i) => (
                        <div className="pListItem" key={i}>
                            <img
                                src={img}
                                alt="" className="pListImg"/>
                            <div className="pListItemTitle">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))
                    }
                </>
            )
            }
        </div>
    )
}

export default PropertyList
