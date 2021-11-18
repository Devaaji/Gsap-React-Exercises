import React, { useEffect } from 'react'
import './navbar.css'
import { gsap } from 'gsap'

function Navbar() {

    useEffect (() => {
        gsap.to('.logo-navbar', {
            delay: .5,
            rotation: 360
        })
        
    })
    return (
        <nav className="navbar">
            <nav className="navbar-container">
                <nav className="navbar-container-group">
                <div className="logo-navbar">
                    Depdep
                </div>
                <ul>
                    <li className="drop-right">Home</li>
                    <li className="drop-right">Project</li>
                    <li className="drop-right">About</li>
                </ul>
                </nav>
            </nav>
        </nav>
    )
}

export default Navbar
