import React from "react"
import { Helmet } from "react-helmet"
import "../../static/styles/index.css"
import TemporaryDrawer from "../components/navigation"
import { Grid, Paper, Box } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogPosts from "../components/blogPosts"
import BioCard from "../components/bioCard"
import ImageCard from "../components/carousel"
import { withPrefix } from "gatsby"
import TitleComponent from "../components/titleComponent"
import Footer from "../components/footer"
import ListComponent from "../components/list"

class Art extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Ruwani's Portfolio</title>
        </Helmet>
        <Paper
          style={{
            backgroundColor: "var(--obg)",
            minHeight: "100vh",
            minWidth: "100%",
            paddingTop: "0%",
            marginTop: "-3%",
          }}
        >
          <TemporaryDrawer />
          <Box
            style={{
              backgroundColor: "var(--obg)",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "8%",
            }}
          >
            <Grid container spacing={8}>
              <Grid item lg={4} md={12} xs={12}>
                <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                  <BioCard />
                </div>
              </Grid>
              <Grid item lg={8} md={12} xs={12}>
                <Grid item md={11} xs={12}>
                  <Grid container spacing={3}>
                    <Grid item md={8} xs={12}>
                      <TitleComponent
                        title="Tracking ."
                        description="goodnotes/letterboxed combined into 1"
                      />
                    </Grid>
                    <Grid item md={4} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                      <ListComponent
                        title="Books"
                        lastUpdated="July 12th 2021"
                        listItems={[{ title: "New Girl", rating: "8/10" }, { title: "Avatar the Last Aibender", rating: "10/10" }]}

                      ></ListComponent>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <ListComponent
                        title="Books"
                        lastUpdated="July 12th 2021"
                        listItems={[{ title: "New Girl", rating: "8/10" }, { title: "Avatar the Last Aibender", rating: "10/10" }]}

                      ></ListComponent>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        <Footer style={{ marginRight: "4%" }} />
      </Paper>
      </>
    )
  }
}
export default Art
