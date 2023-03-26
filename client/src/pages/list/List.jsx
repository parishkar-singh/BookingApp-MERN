import React, {useState} from 'react'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import './list.css'
import {format} from "date-fns"
import {DateRange} from 'react-date-range';
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../components/hooks/useFetch";

const List = () => {
    const location = useLocation()
    console.log(location)
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.date ?? [{startDate: new Date(), endDate: new Date()}]);

    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false)
    // const [options, setOptions] = useState()
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const {data,loading,error,reFetch}=useFetch(`/hotels?city=${destination}&min=${min|| 0}&max=${max||99999}`)
    const handleClick=()=>{
        reFetch()
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">
                            Search
                        </h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="listItem">
                            <label>Check-in Date</label>
                            <span
                                onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {/*<input type="text" />*/}
                        {openDate && (<DateRange
                            onChange={(item) => setDates([item.selection])}
                            minDate={new Date()}
                            ranges={dates}
                        />)}
                        </div>
                        <div className="listItem">
                            <label>Options</label>
                            <div className="listOptions">


                                <div className="listOptionItem">
                                <span className="listOptionsText">
                                    Min price <small>per night</small>
                                </span>
                                    <input onChange={e=>setMin(e.target.value)} type="number" min={1} className="listOptionInput"/>

                                </div>
                                <div className="listOptionItem">
                                <span className="listOptionsText">
                                    Max price <small>per night</small>
                                </span>
                                    <input onChange={e=>setMax(e.target.value)}  type="number" min={1} className="listOptionInput"/>

                                </div>
                                <div className="listOptionItem">
                                <span className="listOptionsText">
                                    Adults
                                </span>
                                    <input type="number" min={1} className="listOptionInput"
                                           placeholder={options.adult}/>
                                </div>
                                <div className="listOptionItem">
                                <span className="listOptionsText">
                                    Children
                                </span>
                                    <input type="number" min={0} className="listOptionInput"
                                           placeholder={options.children}/>

                                </div>
                                <div className="listOptionItem">
                                <span className="listOptionsText">
                                    Room
                                </span>
                                    <input type="number" min={1} className="listOptionInput"
                                           placeholder={options.room}/>

                                </div>
                            </div>
                        </div>
                            <button onClick={handleClick} >Search</button>
                    </div>
                    <div className="listResult">
                        {loading ?("loading text"):(
                            <>
                                {data?.map(item=>(
                                <SearchItem item={item} key={item._id}/>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List
