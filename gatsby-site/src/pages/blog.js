import React from "react"
import { Helmet } from "react-helmet"
import "../../static/styles/index.css"
import TemporaryDrawer from "../components/navigation"
import { Grid, Paper, Box } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogPosts from "../components/blogPosts"
import BioCard from "../components/bioCard"
class Blog extends React.Component {
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
              <Grid item lg={4} md={12}>
                <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                  <BioCard />
                </div>
              </Grid>
              <Grid item lg={8} md={12}>
                <BlogPosts />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </>
    )
  }
}
export default Blog
