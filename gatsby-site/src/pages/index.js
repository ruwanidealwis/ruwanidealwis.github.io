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
                "linear-gradient(to left,  var(--main) 60%, var(--secondary)  0%)",
              minHeight: "80vh",
            }}
          >
            <TemporaryDrawer />

            <Grid container spacing={4} alignItems={"center"}>
              <Grid item md={12} style={{ margin: "9%" }}>
                <Typist cursor={{ hideWhenDone: true, show: false }}>
                  <Typist.Delay ms={200} />
                  <Typography id="headTitle" variant="h1">
                    Hello!
                  </Typography>
                  <Typist.Delay ms={500} />

                  <Typography variant="h3" id="subTitle">
                    I'm Ruwani and I love to code!
                  </Typography>
                </Typist>

                <Typography id="smallBio" variant="h4">
                  You can learn more about me{" "}
                  <AniLink
                    activeStyle={{ color: "#ffce72" }}
                    swipe
                    style={{ color: "black", textDecoration: "underline" }}
                    direction="right"
                    to="/about"
                  >
                    here
                  </AniLink>
                  , and view my projects{" "}
                  <AniLink
                    activeStyle={{ color: "#ffce72" }}
                    swipe
                    style={{ color: "black", textDecoration: "underline" }}
                    direction="right"
                    to="/projects"
                  >
                    here.
                  </AniLink>{" "}
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
