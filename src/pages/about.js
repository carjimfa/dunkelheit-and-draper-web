import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh">
    <SEO title="About" />
    <div className="col-12"><h1>This is the about page</h1></div>
  </Layout>
)

export default AboutPage
