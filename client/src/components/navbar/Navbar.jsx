import React, {useContext} from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";
const Navbar = () => {
    const {user}=useContext(AuthContext)


    return (
        <div className="navbar">
            <div className="navContainer">
                <Link className='link' to='/'>
                <span className="logo">Booking.com</span>
                </Link>
                {user?(user.username):(<div className="navItems">
                    <button className="navButton">Register</button>
                    <Link to='/login' className='link'>
                        <button className="navButton">Login</button>
                    </Link>
                </div>)}
            </div>
        </div>
    )
}
export default Navbar
