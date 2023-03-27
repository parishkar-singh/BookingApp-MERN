import React, {useContext} from "react";
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi,} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'
import {DateRange} from 'react-date-range';
import {format} from "date-fns"
import {useNavigate} from "react-router-dom";
import {SearchContext} from "../context/searchContext";
import {AuthContext, AuthContextProvider} from "../context/authContext";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const {dispatch} = useContext(SearchContext)
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const handleOption
        = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        })
    };
    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, dates, options}})
        navigate("/hotels", {state: {destination, dates, options}})

    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>

                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {type !== 'list' &&
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">Get rewarded for your travels unlock instant saving of 20% or more
                            with
                            Booking.com account</p>
                        {!user && (
                            <button className="headerBtn">Sign in / Register</button>
                        )}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                                <input type="text" placeholder="Where are you going?" className='headerSearchInput'
                                       onChange={e => setDestination(e.target.value)}/>
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                                <span onClick={() => setOpenDate(!openDate)}
                                      className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                                <span onClick={() => setOpenOptions(!openOptions)}
                                      className="headerSearchText"> {`${options.adult} Adults  ${options.children} Children  ${options.room} `}room</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1} className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}>-
                                            </button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0}
                                                    onClick={() => handleOption("children", "d")}
                                                    className="optionCounterButton">-
                                            </button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton"
                                                    onClick={() => handleOption("children", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 0}
                                                    onClick={() => handleOption("room", "d")}
                                                    className="optionCounterButton">-
                                            </button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button onClick={() => handleOption("room", "i")}
                                                    className="optionCounterButton">+
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>

                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}
export default Header
