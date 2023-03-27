import "./login.css"

import React, {useContext, useState} from 'react';
import {AuthContext} from "../../components/context/authContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const navigate=useNavigate()
    const {loading, error, dispatch} = useContext(AuthContext)
    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE",payload:error.response})

        }
    }
    return (
        <div className="login">
            <div className="lContainer">
                <h1 className='loginh1'>Booking.com</h1>
                <input placeholder='username' className='lInput' id='username' onChange={handleChange} type="text"/>
                <input placeholder='password' className='lInput' id='password' onChange={handleChange} type="text"/>
                <hr/>
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>

        </div>
    );
};

export default Login;
