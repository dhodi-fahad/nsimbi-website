"use client"

import {useState} from "react";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";

const Shared = () => {
    const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle menu visibility
    };
    return (
        <>
            <Navbar toggleMenu={toggleMenu} /> {/* Pass toggleMenu function as prop */}
            {showMenu && <Menu />} {/* Show Menu component based on state */}
        </>
    )
}

export default Shared;