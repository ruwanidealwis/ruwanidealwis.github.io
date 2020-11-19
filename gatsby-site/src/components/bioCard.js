import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"

import memojiURL from "../../static/images/minimalistV4.png"
import EmailIcon from "@material-ui/icons/EmailRounded"
import GithubIcon from "../../static/images/github.svg"
import LinkedinIcon from "../../static/images/linkedin-logo.svg"
import "../../static/styles/about.css"
import React from "react"
class BioCard extends React.Component {
  render() {
    return (
      <div>
        <Card
          className="bioCardImage"
          style={{
            marginLeft: "0%",
            marginTop: "-50%",
            backgroundColor: "var(--pbg)",
            marginBottom: "12%",
          }}
        >
          <CardMedia style={{ height: "33vh" }} image={memojiURL}></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="h2"
            >
              Name: Ruwani
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              align="center"
              component="h2"
            >
              Pronouns: She/Her
            </Typography>

            <List
              style={{
                display: "inline-flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                margin: "auto",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <ListItem
                button
                component="a"
                href="mailto: ruwanide51@gmail.com"
                style={{ justifyContent: "center" }}
              >
                <EmailIcon color="secondary" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://github.com/ruwanidealwis"
                style={{ justifyContent: "center" }}
              >
                <GithubIcon />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://www.linkedin.com/in/ruwani-de-alwis-610476187/"
                style={{ justifyContent: "center" }}
              >
                <LinkedinIcon />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    )
  }
}
export default BioCard
