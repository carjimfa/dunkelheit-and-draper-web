import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "dunkelheitdraper-logo.svg"}}) {
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
    console.log(data);
    console.log(data.allFile.edges[0].node.publicURL);

    function getImage(data){
      console.log(data)
      let imageElement=<img src={data.allFile.edges[0].node.publicURL} className="image-logo" />;
      return imageElement;
    }
    
  return getImage(data);
}

export default LogoImage
