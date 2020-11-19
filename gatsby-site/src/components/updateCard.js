import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@material-ui/core"

import React from "react"

class UpdateCard extends React.Component {
  render() {
    return (
      <Card style={{ backgroundColor: "var(--pbg)" }}>
        {" "}
        <CardContent>
          {" "}
          <Typography variant="h4" style={{ color: "var(--main)" }}>
            Check In
          </Typography>
          <br />
          <Typography variant="h6" style={{ color: "var(--secondary)" }}>
            Working On:
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>-Analyzing World Happiness</ListItem>
              <ListItem>-Space Barcode</ListItem>
            </List>
          </Typography>
          <Typography variant="h6" style={{ color: "var(--secondary)" }}>
            Reading:
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>-A Man Called Ove</ListItem>{" "}
            </List>
          </Typography>{" "}
          <Typography variant="h6" style={{ color: "var(--secondary)" }}>
            Watching:
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>-New Girl & Gotham</ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default UpdateCard
