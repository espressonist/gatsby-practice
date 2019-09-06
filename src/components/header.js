import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div>
            <p>Gatsby Practice</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </div>
    )
}

export default Header;