import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoImage = ({backgroundColor="#F9BCBF"}) => {
  let greenColor="#3B625C";
  let pinkColor="#F9BCBF";
  const data = useStaticQuery(graphql`
    query {
      logoPink:allFile(filter: {relativePath: {eq: "dunkelheitdraper-logo.svg"}}) {
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
      logoGreen:allFile(filter: {relativePath: {eq: "dunkelheitdraper-logo-green.svg"}}) {
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
  `)

  console.log(backgroundColor);
  console.log(greenColor);

    function getImage(data){
      console.log(data)
      let imageElement=<img src={backgroundColor===greenColor?data.logoPink.edges[0].node.publicURL:data.logoGreen.edges[0].node.publicURL} className="image-logo" />;
      return imageElement;
    }
    
  return getImage(data);
}

export default LogoImage
