import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p>Hi, Im Nicolas. I'm a web developer.</p>
                <p><Link to="/contact">Contact me.</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage;