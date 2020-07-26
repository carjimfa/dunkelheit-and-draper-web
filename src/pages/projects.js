import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout innerHeight="100%" outerHeight="60vh">
    <SEO title="Projects" />
    <div className="col-12"><h1>This is the projects page</h1></div>
  </Layout>
)

export default ProjectsPage