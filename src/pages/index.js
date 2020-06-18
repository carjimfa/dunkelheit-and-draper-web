import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout innerHeight="100%" outerHeight="calc(100vh - 160px - 1vw)" backgroundColor="#3B625C" color="#F9BCBF">
    <SEO title="Home" />
    <div className="col-2"><h1></h1></div>
    <div className="col-2" style={{fontWeight:"400"}}><h1>Research,</h1></div>
    <div className="col-2 font-lust"><h1>Design,</h1></div>
    <div className="col-2" style={{fontWeight:"400"}}><h1>Implement,</h1></div>
    <div className="col-2 font-lust"><h1>Repeat</h1></div>
    <div className="col-2"><h1></h1></div>
  </Layout>
)

export default IndexPage
