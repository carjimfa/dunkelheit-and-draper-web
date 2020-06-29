import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WorkflowElements from "../components/workflow-elements"

const WorflowPage = () => (
  <Layout innerHeight="100%" outerHeight="auto" backgroundColor="#F9BCBF" color="#3B625C" gridType="baseline">
    <SEO title="Workflow" />
    <div className="col-1"></div>
    <div className="col-7">
      <h1 className="workflow-over-title font-rubik">Our workflow</h1>
      <h1 className="workflow-title font-lust">It's all about process</h1>
    </div>
    <div className="col-4"></div>
    <WorkflowElements></WorkflowElements>
  </Layout>
)

export default WorflowPage
