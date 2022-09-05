import React from "react"
import '../index.css'

export default function Navbar() {
    return (
        <nav>
            <img src="./logo512.png" alt="logo of react" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
