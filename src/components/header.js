import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './style.css'
import LogoImage from "./logo-image"


const Header = ({ siteTitle }) => {



  let data=useStaticQuery(graphql`
    query {
        nameImage:allFile(filter: {relativePath: {eq: "dunkelheit-draper-name.svg"}}) {
          edges {
            node {
              id
              name
              dir
              size
              relativeDirectory
              relativePath
              publicURL
            }
          }
        },
        versionImage:allFile(filter: {relativePath: {eq: "circle-webversion.svg"}}) {
          edges {
            node {
              id
              name
              dir
              size
              relativeDirectory
              relativePath
              publicURL
            }
          }
        }
      }
    `);

  const backgroundStyles = `
    url(${data.versionImage.edges[0].node.publicURL});
  `;

  let result=<header
    style={{
      marginBottom: `1.45rem`,
    }}
    className="grid grid-center"
  >
    <div style={{ margin: `0 auto`, padding: `1.45rem 1.0875rem`, textAlign:`left`, width: `100%`}} className="col-4">
      <h1 style={{ margin: 0, width: `100%` }}>
        <Link to="/" style={{textDecoration: `none`, width: `100%`}}>
          <img src={data.nameImage.edges[0].node.publicURL} href=""/>
        </Link>
      </h1>
    </div>
    <div style={{ margin: `0 auto`, padding: `1.45rem 1.0875rem`, textAlign:`center`}} className="col-4">
      <LogoImage></LogoImage>
    </div>
    <div style={{ margin: `0 auto`, padding: `1.45rem 1.0875rem`, textAlign:`right`}} className="col-4">
      <div className="grid grid-center">
        <div className="col-4">
          <a href="workflow/index.html" class="font-lust">Workflow</a>
        </div>
        <div className="col-4">
          <a href="#contact" class="font-rubik">Contact</a>
        </div>
        <div className="col-4" style={{animation:"rotate 10s infinite linear"}}>
          <a id="version" style={{
            backgroundImage:`url(${data.versionImage.edges[0].node.publicURL})`
            }}>
            <span>0.8</span>
          </a>
        </div>
      </div>
      
    </div>
  </header>;

  return result;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
