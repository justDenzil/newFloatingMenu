import React from 'react'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'
import './Hamburger.css'


function HamburgerMenu() {
    return (
        <>
            <div className="header">
                <div className="hamburger-container">
                    <Hamburger className="menu-icon"/>
                </div>
                <div className="company-container">
                        <div className="company-name">Apple Inc.</div>
                        <div className="down-arrow">
                            <DownArrow className="down-icon"/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu