import React from 'react';
import "./reserve.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../components/hooks/useFetch";

const Reserve = ({setOpen, hotelId}) => {


    const {data, loading, error} = useFetch(`/hotels/room/${hotelId}`)
    console.log(data)
    return (<div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)}/>
                <span>Select your Rooms:</span>
                {data.map(item => (<div className='rItem'>
                        <div className='rItemInfo'>
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max People Allowed:<b>{item.maxPeople}</b></div>
                        </div>
                    </div>))}
            </div>
        </div>);
};

export default Reserve;
