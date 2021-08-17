import React from "react"
import { Paper } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../../static/styles/navigation.css"

export default function TemporaryDrawer() {
  const iconStyle2 = {
    transform: "scale(1.5)",
    
  }
  const linkStyle = {
    marginRight: "2%",
    color: "var(--link)",
    fontFamily: "Raleway",
    paddingBottom: "5%",
  }
  return (
    <div>
      <Paper
        elevation={0}
        id="navigation"
        style={{
          paddingTop: "2%",
          backgroundColor: "transparent",
          border: "none",
          color: "black",
          display: "flex",
          flexDirection: "row",
          textAlign: "right",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
         
             
             
              
            
       

        <AniLink
          activeStyle={{ color: "black" }}
          style={{
            marginRight: "2%",
            marginLeft: "2%",
            color: "var(--link)",
            fontFamily: "Raleway",
          }}
          swipe
          direction="right"
          duration={1}
          to="/"
        >
          HOME
        </AniLink>
        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          to="/about"
        >
          ABOUT
        </AniLink>

        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          duration={1}
          to="/projects"
        >
          PROJECTS
        </AniLink>
        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          duration={1}
          to="/blog"
        >
          BLOG
        </AniLink>
      </Paper>
    </div>
  )
}
