import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './style.css'
import LogoImage from "./logo-image"


const Header = ({ siteTitle="Title", backgroundColor="#3B625C", color="#F9BCBF", className="" }) => {

  let isShown=false;
  let greenColor="#3B625C";
  let pinkColor="#F9BCBF";

  let ball;
  if(typeof(document)!==`undefined`){
    ball = document.getElementById("ball");
  }


  let mouseX = 0;
  let mouseY = 0;

  let ballX = 0;
  let ballY = 0;

  let speed = 0.1;

  if(typeof(document)!==`undefined`){
    document.onmousemove=function(evt){
      mouseX=evt.pageX;
      mouseY=evt.pageY;
    }
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
        nameImageGreen:allFile(filter: {relativePath: {eq: "dunkelheitdraper-green.svg"}}) {
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

  let result = <header className={className}
    style={{
      display: 'grid',
      gridTemplateColumns: "25% 50% 25%",
      gridTemplateRows: "auto",
      justifyItems: "center",
      alignItems: "center",
      backgroundColor:backgroundColor,
      color:color
    }}
    className={className}
  >
    <div style={{ margin: `0 auto`, textAlign: `left`, width: `100%`, paddingLeft: `52px` }}>
      <h1 style={{ margin: 0, width: `100%` }}>
        <AniLink style={{color:color}} paintDrip hex={color} to="/about" style={{ textDecoration: `none`, width: `100%` }}>
          <img src={backgroundColor==pinkColor?data.nameImageGreen.edges[0].node.publicURL:data.nameImage.edges[0].node.publicURL} href="" />
        </AniLink>
      </h1>
    </div>
    <div style={{ margin: `0 auto`, textAlign: `center`, width: `100%` }}>
      <AniLink style={{color:color}} paintDrip hex={color} to="/">
        <LogoImage backgroundColor={backgroundColor}></LogoImage>
      </AniLink>
    </div>
    <div style={{ margin: `0 auto`, textAlign: `right`, width: `100%`}}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: "100%",
        gridTemplateRows: "auto",
        justifyItems: "end",
        alignItems: "end"
      }}>
        <div style={{
          width: "8vw",
          textAlign:"right",
          paddingRight: `52px`
        }}>
          <AniLink style={{color:color}} paintDrip hex={color} to="/contact/" className="font-rubik  no-decoration">Contact</AniLink>
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
