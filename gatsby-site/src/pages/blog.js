import React from "react"
import { Helmet } from "react-helmet"
import "../../static/styles/index.css"
import TemporaryDrawer from "../components/navigation"
import { Grid, Paper, Box } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogPosts from "../components/blogPosts"
import BioCard from "../components/bioCard"
import TitleComponent from "../components/titleComponent"
import Footer from "../components/footer"
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
              <Grid item lg={4} md={12} xs={12}>
                <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                  <BioCard />
                </div>
              </Grid>
              <Grid item md={8} xs={12}>
                <Grid container spacing={3}>
                  <Grid item md={8} xs={12}>
                    <TitleComponent
                      title="Writing."
                      description="writing from a very mediocre writer"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <BlogPosts />
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
export default Blog
