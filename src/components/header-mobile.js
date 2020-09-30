import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './style.css'
import LogoImage from "./logo-image"


const HeaderMobile = ({ siteTitle = "Title", backgroundColor = "#3B625C", color = "#F9BCBF", className = "" }) => {

    let isShown = false;
    let greenColor = "#3B625C";
    let pinkColor = "#F9BCBF";

    let ball;
    if (typeof (document) !== `undefined`) {
        ball = document.getElementById("ball");
    }


    let mouseX = 0;
    let mouseY = 0;

    let ballX = 0;
    let ballY = 0;

    let speed = 0.1;

    if (typeof (document) !== `undefined`) {
        document.onmousemove = function (evt) {
            mouseX = evt.pageX;
            mouseY = evt.pageY;
        }
    }

    function showMenu(){
        console.log("showmenu")
        document.getElementById("mobile-menu").classList.remove("hidden");
        document.getElementById("mobile-menu").classList.add("shown");
    }

    function hideMenu(){
        document.getElementById("mobile-menu").classList.remove("shown");
        document.getElementById("mobile-menu").classList.add("hidden");
    }

    let data = useStaticQuery(graphql`
    query {
        nameImage:allFile(filter: {relativePath: {eq: "d and d.svg"}}) {
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
        nameImageGreen:allFile(filter: {relativePath: {eq: "d and d-green.svg"}}) {
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
        menu:allFile(filter: {relativePath: {eq: "menu.svg"}}) {
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
          menuGreen:allFile(filter: {relativePath: {eq: "menu-green.svg"}}) {
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
    console.log(data)

    let result =
        <div style={{overflow:"hidden"}}>
            <header
                style={{
                    display: 'grid',
                    gridTemplateColumns: "32vw 33vw 32vw",
                    gridTemplateRows: "auto",
                    justifyItems: "center",
                    alignItems: "center",
                    padding: "1vw 1vw 0 1vw",
                    backgroundColor: backgroundColor,
                    color: color
                }}
                className={className}
            >
                <div style={{ margin: `0 auto`, textAlign: `left`, width: '100%' }}>
                    <h1 style={{ margin: 0 }}>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/about" style={{ textDecoration: `none` }}>
                            <img src={backgroundColor == pinkColor ? data.nameImageGreen.edges[0].node.publicURL : data.nameImage.edges[0].node.publicURL} href="" />
                        </AniLink>
                    </h1>
                </div>
                <div></div>
                <div style={{ margin: `0`, textAlign: `right`, width: '100%' }}>
                    <h1 style={{ margin: 0 }}>
                        <img src={backgroundColor == pinkColor ? data.menuGreen.edges[0].node.publicURL : data.menu.edges[0].node.publicURL} href="" onClick={showMenu}/>
                    </h1>
                </div>
                <div></div>
                <div style={{ margin: `0 auto`, textAlign: `center` }}>
                    <AniLink style={{ color: color }} paintDrip hex={color} to="/">
                        <LogoImage backgroundColor={backgroundColor}></LogoImage>
                    </AniLink>
                </div>
                <div></div>
            </header>
            <div id="mobile-menu" className="mobile-menu grid grid-center hidden hide-desktop" style={{backgroundColor:backgroundColor}}>
                <h1 style={{ margin: 0, position:"absolute", right:"calc(1vw + 1rem)", top:"1vw"}}>
                    <img src={backgroundColor == pinkColor ? data.menuGreen.edges[0].node.publicURL : data.menu.edges[0].node.publicURL} href="" onClick={hideMenu} />
                </h1>
                <ul className="col-12">
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/">
                            Home
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/workflow">
                            Our Workflow
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/about">
                            About D&D
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/contact">
                            Buy us a Matcha Latte!
                        </AniLink>
                    </li>
                </ul>
            </div>
        </div>
        ;

    return result;
}

HeaderMobile.propTypes = {
    siteTitle: PropTypes.string,
}

HeaderMobile.defaultProps = {
    siteTitle: ``,
}

export default HeaderMobile
