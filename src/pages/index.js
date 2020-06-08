import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh">
    <SEO title="Home" />
    <div className="col-3"><h1>Research</h1></div>
    <div className="col-3"><h1>Design</h1></div>
    <div className="col-3"><h1>Implement</h1></div>
    <div className="col-3"><h1>Repeat</h1></div>
  </Layout>
)

export default IndexPage
