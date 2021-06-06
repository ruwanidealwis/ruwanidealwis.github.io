import React from "react"
import Typist from "react-typist"
import { Helmet } from "react-helmet"
import "../../static/styles/index.css"
import TemporaryDrawer from "../components/navigation"
import { Grid, Paper, Typography } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Ruwani's Portfolio</title>
        </Helmet>
        <Paper elevation={20}>
          <div
            style={{
              background:
                "linear-gradient(to left,  var(--main) 47%, var(--secondary)  0%)",
              minHeight: "80vh",
            }}
          >
            <TemporaryDrawer />

            <Grid container spacing={4} alignItems={"center"}>
              <Grid item md={12} style={{ margin: "9%" }}>
                
              
                  <Typography id="headTitle" variant="h1" style={{ fontSize:'5vw'}}>
                  hi, i'm ruwani! 🌻
                  </Typography>
               

                <Typography variant="h3" id="subTitle" style={{ fontSize: '3vw' }}>
                    coder, developer, avid netflix watcher
                  </Typography>

                <Typography id="smallBio" variant="h4" style={{ fontSize: '1.5vw' }}>
                  learn more about me{" "}
                  <AniLink
                    activeStyle={{ color: "#ffce72" }}
                    swipe
                    style={{ color: "black", textDecoration: "underline" }}
                    direction="right"
                    to="/about"
                  >
                    here.
                  </AniLink>
                
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </>
    )
  }
}
export default Home
