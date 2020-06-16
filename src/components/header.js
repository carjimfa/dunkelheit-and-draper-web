import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './style.css'
import LogoImage from "./logo-image"


const Header = ({ siteTitle }) => {


  function onEnterPointer() {
    console.log("mouseEnter");
    document.getElementById("ball").style.width = "100px";
    document.getElementById("ball").style.height = "100px";
  }

  function onLeavePointer() {
    console.log("mouseLeave");
    document.getElementById("ball").style.width = "20px";
    document.getElementById("ball").style.height = "20px";
  }


  let data = useStaticQuery(graphql`
    query {
        nameImage:allFile(filter: {relativePath: {eq: "dunkelheitdraper.svg"}}) {
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


  let result = <header
    style={{
      display: 'grid',
      gridTemplateColumns: "24vw 50vw 24vw",
      gridTemplateRows: "auto",
      justifyItems: "center",
      alignItems: "center",
      margin: "1vw 1vw 0 1vw"
    }}
    className=""
  >
    <div style={{ margin: `0 auto`, textAlign: `left`, width: `100%` }}>
      <h1 style={{ margin: 0, width: `100%` }}>
        <AniLink paintDrip hex="#F9BCBF" to="/" style={{ textDecoration: `none`, width: `100%` }} onMouseEnter={onEnterPointer} onMouseLeave={onLeavePointer}>
          <img src={data.nameImage.edges[0].node.publicURL} href="" />
        </AniLink>
      </h1>
    </div>
    <div style={{ margin: `0 auto`, textAlign: `center`, width: `100%` }}>
      <LogoImage></LogoImage>
    </div>
    <div style={{ margin: `0 auto`, textAlign: `right`, width: `100%` }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: "33.33% 33.33% 33.33%",
        gridTemplateRows: "auto",
        justifyItems: "center",
        alignItems: "center"
      }}>
        <div style={{
          width: "8vw",
          textAlign:"center"
        }}>
          <AniLink paintDrip hex="#F9BCBF" to="/workflow/" onMouseEnter={onEnterPointer} onMouseLeave={onLeavePointer}>Workflow</AniLink>
        </div>
        <div style={{
          width: "8vw",
          textAlign:"center"
        }}>
          <AniLink paintDrip hex="#F9BCBF" to="/contact/" className="font-rubik" onMouseEnter={onEnterPointer} onMouseLeave={onLeavePointer}>Contact</AniLink>
        </div>
        <div style={{
          width: "8vw",
          textAlign:"center"
        }}>
          <div style={{
            backgroundImage: `url(${data.versionImage.edges[0].node.publicURL})`,
            height: "80px",
            width: "80px",
            backgroundSize: "contain",
            position: "absolute",
            top: "1vw",
            right: "calc(40px + 1vw)",
            animation: "rotate linear 10s infinite"
          }}>
          </div>
          <div>
            <span>0.8</span>
          </div>


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
