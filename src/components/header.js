import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './style.css'
import LogoImage from "./logo-image"


const Header = ({ siteTitle="Title", backgroundColor="#3B625C", color="#F9BCBF" }) => {

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

  let speed = 1;

  if(typeof(document)!==`undefined`){
    document.onmousemove=function(evt){
      ball=document.getElementById("ball");
      document.getElementById("ball").style.left=evt.pageX+"px";
      document.getElementById("ball").style.top=evt.pageY+"px";
      mouseX=evt.pageX;
      mouseY=evt.pageY;
    }
  }



  function animate () {
    if(typeof(document)!==`undefined`){
      ball = document.getElementById("ball");
    
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;
  
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
      
      if(ball){
        if(ballX != 0 || ballY != 0){
          ball.style.left = ballX + "px";
          ball.style.top = ballY + "px";
        }
      }
  
      requestAnimationFrame (animate);
    }
  }

  animate();
  
  function onEnterPointer(text=null, textTime=200) {
    if(typeof(document)!==`undefined`){
      isShown=true;
      document.getElementById("ball").style.width = "250px";
      document.getElementById("ball").style.height = "250px";
      document.getElementById("ball").style.mixBlendMode = "normal";
      setTimeout(()=>{
        if(isShown){
          document.getElementById("ball-text").innerHTML=text?text:"Let's see!";
          document.getElementById("ball-text").style.opacity="1";
        }
        
      }, textTime);
    }
  }

  function onLeavePointer() {
    if(typeof(document)!==`undefined`){
      isShown=false;
      document.getElementById("ball-text").innerHTML="";
      document.getElementById("ball-text").style.opacity="0";
      document.getElementById("ball").style.width = "20px";
      document.getElementById("ball").style.height = "20px";
      document.getElementById("ball").style.mixBlendMode = "exclusion";
    }

  }



  function onEnterPointerAbout(){
    onEnterPointer("What are we doing here?", 250);
  }

  function onEnterPointerHome(){
    onEnterPointer("Let's go back home.", 250);
  }

  function onEnterPointerWorkflow(){
    onEnterPointer("How do we handle all this?", 250);
  }

  function onEnterPointerContact(){
    onEnterPointer("Buy us a Matcha Latte!", 250);
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

  let result = <header
    style={{
      display: 'grid',
      gridTemplateColumns: "24vw 50vw 24vw",
      gridTemplateRows: "auto",
      justifyItems: "center",
      alignItems: "center",
      padding: "1vw 1vw 0 1vw",
      backgroundColor:backgroundColor,
      color:color
    }}
    className=""
  >
    <div style={{ margin: `0 auto`, textAlign: `left`, width: `100%` }}>
      <h1 style={{ margin: 0, width: `100%` }}>
        <AniLink style={{color:color}} paintDrip hex={color} to="/about" style={{ textDecoration: `none`, width: `100%` }} onMouseEnter={onEnterPointerAbout} onMouseLeave={onLeavePointer}>
          <img src={backgroundColor==pinkColor?data.nameImageGreen.edges[0].node.publicURL:data.nameImage.edges[0].node.publicURL} href="" />
        </AniLink>
      </h1>
    </div>
    <div style={{ margin: `0 auto`, textAlign: `center`, width: `100%` }}>
      <AniLink style={{color:color}} paintDrip hex={color} to="/" onMouseEnter={onEnterPointerHome} onMouseLeave={onLeavePointer}>
        <LogoImage backgroundColor={backgroundColor}></LogoImage>
      </AniLink>
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
          <AniLink style={{color:color}} paintDrip hex={color} className="font-lust no-decoration" to="/workflow/" onMouseEnter={onEnterPointerWorkflow} onMouseLeave={onLeavePointer}>Workflow</AniLink>
        </div>
        <div style={{
          width: "8vw",
          textAlign:"center"
        }}>
          <AniLink style={{color:color}} paintDrip hex={color} to="/contact/" className="font-rubik  no-decoration" onMouseEnter={onEnterPointerContact} onMouseLeave={onLeavePointer}>Contact</AniLink>
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
            <span className="font-lust">0.8</span>
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
