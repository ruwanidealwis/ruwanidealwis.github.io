import { Box, Grid, Paper } from "@material-ui/core"
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react"
import AboutCard from "../components/aboutCard"
import BioCard from "../components/bioCard"
import TemporaryDrawer from "../components/navigation"
import UpdateCard from "../components/updateCard"

class About extends React.Component {
  render() {
    return (
      <Paper
        style={{
          backgroundColor: "var(--obg)",
          minHeight: "80vh",
          minWidth: "100%",
          paddingTop: "0%",
          marginBottom: "4%",
        }}
      >
        <TemporaryDrawer />
        <Box
          style={{
            paddingLeft: "7%",
            paddingRight: "7%",
            paddingBottom: "2%",
          }}
        >
          <Grid container spacing={4}>
            <Grid
              item
              lg={3}
              md={4}
              xs={12}
              style={{ marginBottom: "4%", color: "orange" }}
            >
              <BioCard />

              <UpdateCard />
            </Grid>

            <Grid item lg={9} md={8} xs={12} style={{ margin: "auto" }}>
              <AboutCard
                webDevLink="../projects?filter=webDevelopment"
                dataSciLink="../projects?filter=dataScience"
                style={{}}
              ></AboutCard>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    )
  }
}
export default About
