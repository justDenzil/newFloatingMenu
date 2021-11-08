import React, { useState } from 'react'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'
import './Hamburger.css'
import FloatingMenu from './FloatingMenu';


function HamburgerMenu() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="hamburger-container">
                    <Hamburger className="menu-icon" onClick={() => setOpen(!open)}  />
                </div>
                <div className="company-container">
                        <div className="company-name">Apple Inc.</div>
                        <div className="down-arrow">
                            <DownArrow className="down-icon"/>
                        </div>
                </div>
            </div>
        {open && <FloatingMenu/>}
        </>
    )
}

export default HamburgerMenu