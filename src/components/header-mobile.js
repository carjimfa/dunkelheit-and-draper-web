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



    function animate() {
        if (typeof (document) !== `undefined`) {
            ball = document.getElementById("ball");

            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);

            if (ball) {
                if (ballX != 0 || ballY != 0) {
                    ball.style.left = ballX + "px";
                    ball.style.top = ballY + "px";
                }
            }

            requestAnimationFrame(animate);
        }
    }

    animate();

    function onEnterPointer(text = null, textTime = 200) {
        if (typeof (document) !== `undefined`) {
            isShown = true;
            document.getElementById("ball").style.width = "250px";
            document.getElementById("ball").style.height = "250px";
            document.getElementById("ball").style.mixBlendMode = "normal";
            setTimeout(() => {
                if (isShown) {
                    document.getElementById("ball-text").innerHTML = text ? text : "Let's see!";
                    document.getElementById("ball-text").style.opacity = "1";
                }

            }, textTime);
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

    function onLeavePointer() {
        if (typeof (document) !== `undefined`) {
            isShown = false;
            document.getElementById("ball-text").innerHTML = "";
            document.getElementById("ball-text").style.opacity = "0";
            document.getElementById("ball").style.width = "20px";
            document.getElementById("ball").style.height = "20px";
            document.getElementById("ball").style.mixBlendMode = "exclusion";
        }

    }

    function onEnterPointerAbout() {
        onEnterPointer("Meet D&D", 350);
    }

    function onEnterPointerHome() {
        onEnterPointer("Let's go back home.", 350);
    }

    function onEnterPointerWorkflow() {
        onEnterPointer("It's all about process", 350);
    }

    function onEnterPointerContact() {
        onEnterPointer("Buy us a Matcha Latte!", 350);
    }

    function onEnterPointerProjects() {
        onEnterPointer("See our work", 350);
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
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/about" style={{ textDecoration: `none` }} onMouseEnter={onEnterPointerAbout} onMouseLeave={onLeavePointer}>
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
                    <AniLink style={{ color: color }} paintDrip hex={color} to="/" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
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
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
                            Home
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/workflow" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
                            Our Workflow
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/about" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
                            About D&D
                        </AniLink>
                    </li>
                    <li>
                        <AniLink style={{ color: color }} paintDrip hex={color} to="/contact" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
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
