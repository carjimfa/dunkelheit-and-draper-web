/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./style.css"

const Layout = ({ children, outerHeight, innerHeight}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  document.onmousemove=function(evt){
    document.getElementById("ball").style.left=evt.pageX+"px";
    document.getElementById("ball").style.top=evt.pageY+"px";
  }


  return (
    <div>
      <div id="main-layout-content">
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div style={{height:outerHeight}}>
          <main className="grid grid-center" style={{height:innerHeight}}>{children}</main>
        </div>
      </div>
      <div id="ball" className="ball"></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  outerHeight: PropTypes.node.isRequired,
  innerHeight: PropTypes.node.isRequired,
}

export default Layout
