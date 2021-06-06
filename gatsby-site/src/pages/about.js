import { Box, Grid, Paper } from "@material-ui/core"
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react"
import { Helmet } from "react-helmet"
import AboutCard from "../components/aboutCard"
import BioCard from "../components/bioCard"
import TemporaryDrawer from "../components/navigation"
import UpdateCard from "../components/updateCard"
import Footer from "../components/footer"
class About extends React.Component {
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
            marginTop:"-3%",
            
          }}
        >
          <TemporaryDrawer />
          <Box
            style={{
              backgroundColor: "var(--obg)",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "3%",
            }}
          >
            <Grid container spacing={8}>
              <Grid
                item
                lg={4}
                md={4}
                xs={12}
                style={{ marginBottom: "4%", color: "orange" }}
              >
                <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                  <BioCard />
                </div>
               
              </Grid>

              <Grid item lg={8} md={8} xs={12} style={{}}>
                <AboutCard
                  webDevLink="../projects?filter=webDevelopment"
                  dataSciLink="../projects?filter=dataScience"
                  style={{}}
                ></AboutCard>
              </Grid>
            
            </Grid>
           

          </Box>
          <br/>
          <br />
          <br />
          <Footer style={{ marginRight: "4%"}}/>
        </Paper>
      </>
    )
  }
}
export default About
