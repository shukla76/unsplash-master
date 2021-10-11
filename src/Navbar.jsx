import React, { useState } from 'react'
import "./navbar.css"
import { useDispatch } from "react-redux"

function Navbar() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "SEARCH", payload: input });
        setInput('');
    }

    return (
        <div className="navbar">
            <form onSubmit={handleSubmit} className="upper">
                <img src="https://user-images.githubusercontent.com/5659117/53183813-c7a2f900-35da-11e9-8c41-b1e399dc3a6c.png" height="40px" alt=""/>
                <div className="search-input">
                    <input type="text" placeholder="Search free high-resolution photos" value={input} onChange={e => setInput(e.target.value)} />
                </div>
                <div className="upper-right">
                <p className="hide">Home</p>
                <p className="hide">Brands</p>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                <button type="submit" className="hide upper-button">Submit a photo</button>
                <i className="hide fa fa-bell" aria-hidden="true"></i>
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
            </form>
            <div className="lower">
                <li>Editorial</li>
                <li>Following</li>
                <li>Nature</li>
                <li>Beauty</li>
                <li>People</li>
                <li>Architecture</li>
                <li>CurrentEvents</li>
                <li>Business</li>
                <li>Fashion</li>
                <li>Following</li>
                <li>Nature</li>
                <li>Beauty</li>
                <li>People</li>
                <li>Architecture</li>
                <li>CurrentEvents</li>
                <li>Business</li>
                <li>Fashion</li>
            </div>
        </div>
    )
}

export default Navbar
