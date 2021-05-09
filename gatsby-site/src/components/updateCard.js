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
          <br />
          <Typography variant="h6" style={{ color: "var(--secondary)" }}>
            Working On:
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>a Flask Messaging App</ListItem>
            </List>
          </Typography>
          <Typography variant="h6" style={{ color: "var(--secondary)" }}>
            Reading:
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>Murder on the Orient Express</ListItem>{" "}
            </List>
          </Typography>{" "}
        </CardContent>
      </Card>
    )
  }
}

export default UpdateCard
