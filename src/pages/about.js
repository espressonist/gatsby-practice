import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>Hi, Im Nicolas. I'm a web developer.</p>
            <p><Link to="/contact">Contact me.</Link></p>
        </div>
    )
}

export default AboutPage;