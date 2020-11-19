import { Paper, Grid, Card, CardContent, Typography } from "@material-ui/core"
import React from "react"
import Languages from "../components/languages"
import TemporaryDrawer from "../components/navigation"
class Toolkit extends React.Component {
  render() {
    return (
      <Paper
        style={{
          backgroundColor: "var(--obg)",
          minHeight: "80vh",
          minWidth: "100%",
          paddingTop: "0%",
          marginBottom: "7%",
        }}
      >
        <TemporaryDrawer />
        <Grid
          container
          spacing={3}
          style={{ padding: "3%", paddingBottom: "6%" }}
        >
          <Grid item md={8}>
            {" "}
            <Card
              style={{
                backgroundColor: "var(--pbg)",

                marginRight: "4%",
                marginBottom: "7%",
                boxShadow: "10px 10px",
                color: "var(--secondary)",
              }}
            >
              <CardContent>
                <Typography variant="h4" style={{ color: "var(--main)" }}>
                  Toolkit.
                </Typography>
                <Typography variant="body1">
                  This is a very high level overview of skills I developed in my
                  classes, internships and through my own side projects
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} md={12}>
            <Languages />
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
export default Toolkit
