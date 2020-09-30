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
import HeaderMobile from "./header-mobile"

const Layout = ({ children, outerHeight, innerHeight, backgroundColor="#3B625C", color="#F9BCBF", gridType="center"}) => {
  let greenColor="#3B625C";
  let pinkColor="#F9BCBF";
  let ballBackgroundColor=backgroundColor==greenColor?pinkColor:greenColor;
  let ballColor=backgroundColor==greenColor?greenColor:pinkColor;
  let gridClass="grid grid-"+gridType;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div id="layout-main-container" style={{backgroundColor:backgroundColor, color:color}}>
      <div id="main-layout-content">
        <Header className="hide-mobile" siteTitle={data.site.siteMetadata.title} color={color} backgroundColor={backgroundColor}/>
        <HeaderMobile className="hide-desktop" siteTitle={data.site.siteMetadata.title} color={color} backgroundColor={backgroundColor}/>
        <div style={{height:outerHeight}}>
          <main className={gridClass} style={{height:innerHeight}}>{children}</main>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  outerHeight: PropTypes.node.isRequired,
  innerHeight: PropTypes.node.isRequired,
}

export default Layout
