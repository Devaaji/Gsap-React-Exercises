import React, { useEffect } from 'react'
import './header.css'
import { gsap } from 'gsap'

function Header() {

    useEffect(() => {
        gsap.to('.text-design', {
            opacity: 1,
            duration: 2,
            delay: .4,
            y: -60
        });
        gsap.to('.text-picture', {
            duration: 3,
            ease: 'power2',
            opacity: 1,
            delay: .8,
            y: -60,
            x: -20
        });
        gsap.to('.text-models', {
            duration: 3,
            opacity: 1,
            ease: 'power3',
            delay: 1.2,
            y: -60,
            x: -30
        });
        gsap.to('.text-project', {
            duration: 3,
            opacity: 1,
            delay: 1.6,
            ease: 'power3',
            y: -60,
            x: 30
        });
    })
    return (
        <div className="header">
            <div className="header-container">
                <div className="title-header">
                    <div className="title-second">
                        <div className="text-design">
                            DESIGN
                        </div>
                        <div className="text-picture">
                            PICTURE
                        </div>
                        <div className="text-models">
                            MODELS
                        </div>
                        <div className="text-project">
                            &amp; PROJECTS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
