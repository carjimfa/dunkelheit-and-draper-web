import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const WorflowPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh" backgroundColor="#F9BCBF" color="#3B625C" gridType="baseline">
    <SEO title="Workflow" />
    <div className="col-1"></div>
    <div className="col-7"><h1 class="workflow-over-title font-rubik">Our workflow</h1></div>
    <div className="col-4"></div>
  </Layout>
)

export default WorflowPage
