import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import TemporaryDrawer from "../components/navigation"

class Blog extends React.Component {
  render() {
    return (
      <Paper elevation={25}>
        <div
          style={{
            backgroundColor: "var(--obg)",
            minHeight: "80vh",
            minWidth: "100%",
            paddingTop: "0%",

            marginBottom: "4%",
          }}
        >
          <TemporaryDrawer />
          <Grid container style={{ paddingLeft: "4%", paddingRight: "4%" }}>
            <Grid Item md={12}>
              <Card>
                <CardContent>
                  {" "}
                  <Typography variant="h4">Embroidery.</Typography>
                  <Typography variant="body1">
                    A little hobby I picked up over Quarentine.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid Item md={12}>
              <Typography variant="h4">Sewing.</Typography>
              <Typography variant="body1">
                Another habbit I picked up over Quarentine
              </Typography>
            </Grid>

            <Grid Item md={12}>
              <Typography variant="h4">Art.</Typography>
              <Typography variant="body1">
                A hobby I'm really trying to get back to!
              </Typography>
            </Grid>
            <Grid Item md={12}>
              <Typography variant="h4">Some Writing.</Typography>
              <Typography variant="body1">
                A small way to improve my written communication
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    )
  }
}

export default Blog
