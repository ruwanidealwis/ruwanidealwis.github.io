import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core"

import iconImage from "../../static/images/minimalistV4.png"
import testImage from "../../static/images/ghibli-9.jpg"
import EmailIcon from "@material-ui/icons/EmailRounded"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import SettingsIcon from "@material-ui/icons/Settings"
import TvIcon from "@material-ui/icons/Tv"

import "../../static/styles/about.css"
import React from "react"
import UpdateCard from "./updateCard"
class BioCard extends React.Component {
  render() {
    return (
      <div>
        <Card
          className="bioCardImage"
          style={{
            marginLeft: "0%",
            marginTop: "0%",
            backgroundColor: "var(--pbg)",
            marginBottom: "12%",

            width: "100%",
          }}
        >
          <CardMedia style={{ height: "25vh" }} image={testImage}></CardMedia>

          <Card
            elevation="0"
            style={{
              marginLeft: "9%",
              marginTop: "-18%",
              backgroundColor: "#00000000",
              padding: "0%",
              marginBottom: "0",
            }}
          >
            <Grid container spacing={3}>
              <Grid item md={3} sm={12}>
                <CardMedia
                  style={{ height: "100px", width: "100px" }}
                  image={iconImage}
                ></CardMedia>
              </Grid>
              <Grid item md={9} sm={12} style={{ position: "relative" }}>
                <CardContent
                  style={{
                    paddingLeft: "20%",
                    textAlign: "left",
                    paddingTop: "13%",
                  }}
                ></CardContent>
              </Grid>
            </Grid>
          </Card>

          <CardContent
            style={{
              paddingTop: "0",
            }}
          >
            <Typography
              style={{
              
                margin: "1%",
                fontWeight:"500",
                paddingLeft: "5%",
                color: "var(--main)",
              }}
              fontWeight="fontWeightBold"
              variant="h5"
              align="left"
              component="h3"
            >
              ruwani ✨
            </Typography>

            <Typography
           
              variant="body1"
              align="left"
              component="h2"
              style={{
                paddingLeft: "5%",
                paddingTop: "0",
              }}
            >
              @ruwanidealwis
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
                textDecoration: "underline",
                textDecorationColor: "var(--main)",
                padding: "0",
              }}
            >
           
              <ListItem
                component="a"
                href="mailto: ruwanide51@gmail.com"
                style={{ justifyContent: "center" }}
              >
                <ListItemText
                  display="block"
                  primaryTypographyProps={{ style: { color: "var(--main)" } }}
                  primary="email"
                />
              </ListItem>
              <ListItem component="a" href="https://github.com/ruwanidealwis">
                <ListItemText
                  primaryTypographyProps={{ style: { color: "var(--main)" } }}
                  primary="github"
                />
              </ListItem>
              <ListItem
                component="a"
                href="https://www.linkedin.com/in/ruwani-de-alwis-610476187/"
              >
                <ListItemText
                  primaryTypographyProps={{ style: { color: "var(--main)" } }}
                  primary="linkedin"
                />
              </ListItem>
            </List>
            <Divider />

            <br />
            <UpdateCard />
          </CardContent>
        </Card>
      </div>
    )
  }
}
export default BioCard
