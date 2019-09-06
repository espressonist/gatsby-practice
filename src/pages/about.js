import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>Hi, Im Nicolas. I'm a web developer.</p>
            <p><Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage;